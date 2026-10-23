'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  /** Text containing numbers, e.g. "~10+ Yrs", "3 Sectors", "Feb 2025", "100%", "2015" */
  text?: string;
  /** Explicit number value */
  value?: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // ms
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  text,
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  decimals = 0,
  className,
  style,
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (text) return text;
    if (value !== undefined) return `${prefix}0${suffix}`;
    return '';
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse text if provided, e.g. "~10+ Yrs" -> prefix: "~", number: 10, suffix: "+ Yrs"
  const parsed = React.useMemo(() => {
    if (value !== undefined) {
      return {
        targetNum: value,
        pre: prefix,
        suf: suffix,
        hasNum: true,
      };
    }

    if (!text) {
      return { targetNum: 0, pre: '', suf: '', hasNum: false };
    }

    // Match first continuous numeric group (handles commas, decimals, or integers)
    // E.g. "Feb 2025" -> pre: "Feb ", num: 2025, suf: ""
    // "~10+ Yrs" -> pre: "~", num: 10, suf: "+ Yrs"
    // "100%" -> pre: "", num: 100, suf: "%"
    // "₹1,900" -> pre: "₹", num: 1900, suf: ""
    const match = text.match(/^(.*?)(\d[\d,.]*)(.*)$/);
    if (match) {
      const pre = match[1];
      const rawNum = match[2].replace(/,/g, '');
      const suf = match[3];
      const targetNum = parseFloat(rawNum);

      if (!isNaN(targetNum)) {
        return {
          targetNum,
          pre,
          suf,
          hasNum: true,
          originalFormatted: match[2],
          isCommaFormatted: match[2].includes(','),
        };
      }
    }

    return { targetNum: 0, pre: text, suf: '', hasNum: false };
  }, [text, value, prefix, suffix]);

  useEffect(() => {
    if (!parsed.hasNum || hasAnimated) return;

    const node = elementRef.current;
    if (!node) return;

    // IntersectionObserver to start counting when scrolled into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const startTime = performance.now();
          const target = parsed.targetNum;
          const pre = parsed.pre;
          const suf = parsed.suf;
          const isComma = parsed.isCommaFormatted;

          const easeOutExpo = (t: number) => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          };

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);

            const current = easedProgress * target;
            let formattedNum: string;

            if (decimals > 0) {
              formattedNum = current.toFixed(decimals);
            } else {
              const rounded = Math.round(current);
              formattedNum = isComma ? rounded.toLocaleString('en-IN') : `${rounded}`;
            }

            setDisplayValue(`${pre}${formattedNum}${suf}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Ensure exact target is shown on completion
              let finalFormatted: string;
              if (decimals > 0) {
                finalFormatted = target.toFixed(decimals);
              } else {
                finalFormatted = isComma ? target.toLocaleString('en-IN') : `${target}`;
              }
              setDisplayValue(`${pre}${finalFormatted}${suf}`);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [parsed, duration, decimals, hasAnimated]);

  return (
    <span ref={elementRef} className={className} style={style}>
      {displayValue}
    </span>
  );
};
