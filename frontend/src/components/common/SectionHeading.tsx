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
        margin: align === 'center' ? '0 auto 60px auto' : '0 0 60px 0',
        position: 'relative',
        zIndex: 3,
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
          marginBottom: subtitle ? '18px' : '0',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lead"
          style={{
            color: darkTheme ? 'rgba(255, 255, 255, 0.72)' : 'var(--text-dark-secondary)',
            fontSize: '1.05rem',
            lineHeight: '1.7',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
