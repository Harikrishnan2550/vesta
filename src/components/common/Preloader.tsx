'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [startReveal, setStartReveal] = useState(false);

  useEffect(() => {
    // 1. Initial short pause on pure white background, then start slow cinematic blur-to-clear focus
    const revealTimer = setTimeout(() => {
      setStartReveal(true);
    }, 150);

    // 2. Start dissolving the preloader overlay after the logo reaches crystal clear focus
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // 3. Completely remove from DOM once fade out animation finishes
    const completeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: fadeOut ? 'none' : 'auto',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.03)' : 'scale(1)',
        filter: fadeOut ? 'blur(6px)' : 'blur(0px)',
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          opacity: startReveal ? 1 : 0,
          filter: startReveal ? 'blur(0px)' : 'blur(28px)',
          transform: startReveal ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(6px)',
          transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), filter 1.6s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform, filter, opacity',
        }}
      >
        {/* Main Brand Emblem */}
        <div
          style={{
            position: 'relative',
            width: '96px',
            height: '96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/logos/vesta-group.png"
            alt="Vesta Future"
            fill
            sizes="140px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Brand Text Identity */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: '1.45rem',
              letterSpacing: '0.22em',
              color: '#111113',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              paddingLeft: '0.22em', // Optical balance for letter spacing
            }}
          >
            VESTA FUTURE
          </span>

          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.36em',
              color: '#8A8A93',
              textTransform: 'uppercase',
              lineHeight: 1,
              paddingLeft: '0.36em', // Optical balance
            }}
          >
            PVT LTD
          </span>
        </div>
      </div>
    </div>
  );
};
