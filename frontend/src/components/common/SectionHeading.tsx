import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowType?: 'gold' | 'blue';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  darkTheme?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowType = 'gold',
  title,
  subtitle,
  align = 'left',
  darkTheme = true,
}) => {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '920px' : '820px',
        margin: align === 'center' ? '0 auto clamp(28px, 4.5vw, 54px) auto' : '0 0 clamp(28px, 4.5vw, 54px) 0',
        position: 'relative',
        zIndex: 3,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {eyebrow && (
        <div
          className="eyebrow"
          style={{
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            color: eyebrowType === 'blue' ? 'var(--seagull-blue)' : 'var(--gold-primary)',
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="heading-section"
        style={{
          color: darkTheme ? '#FFFFFF' : 'var(--text-dark-primary)',
          marginBottom: subtitle ? '14px' : '0',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lead"
          style={{
            color: darkTheme ? 'rgba(255, 255, 255, 0.72)' : 'var(--text-dark-secondary)',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
            lineHeight: '1.65',
            wordBreak: 'break-word',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
