'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { getWhatsAppLink } from '@/config/site';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

interface DivisionCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  logo: string;
  route: string;
  highlights: string[];
  whatsappMessage: string;
  badgeText: string;
  accentColor?: string;
  glowColor?: string;
  divisionNumber: string;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({
  title,
  subtitle,
  description,
  image,
  logo,
  route,
  highlights,
  whatsappMessage,
  badgeText,
  accentColor = '#D98200',
  glowColor = 'rgba(217, 130, 0, 0.25)',
  divisionNumber,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '22px',
        overflow: 'hidden',
        border: `1px solid ${isHovered ? accentColor : 'rgba(255, 255, 255, 0.15)'}`,
        boxShadow: isHovered
          ? `0 24px 60px rgba(0, 0, 0, 0.65), 0 0 30px ${glowColor}`
          : '0 16px 40px rgba(0, 0, 0, 0.45)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition:
          'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease',
        position: 'relative',
      }}
    >
      {/* 1. Photography Hero Header */}
      <div
        style={{
          position: 'relative',
          height: '230px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#070709',
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            filter: isHovered
              ? 'brightness(0.95) contrast(1.05)'
              : 'brightness(0.85) contrast(1)',
            transition:
              'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
          }}
        />

        {/* Ambient Dark Gradient on Photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(7, 7, 9, 0.45) 0%, rgba(7, 7, 9, 0.1) 50%, rgba(7, 7, 9, 0.4) 100%)',
          }}
        />

        {/* Top Badges Bar */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 3,
          }}
        >
          {/* Category Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(9, 9, 13, 0.85)',
              border: `1px solid ${accentColor}`,
              color: accentColor,
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '6px 14px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: accentColor,
                boxShadow: `0 0 8px ${accentColor}`,
              }}
            />
            {badgeText}
          </div>

          {/* Division Index */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 900,
              color: '#FFFFFF',
              backgroundColor: 'rgba(9, 9, 13, 0.85)',
              padding: '5px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              letterSpacing: '0.08em',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
          >
            {divisionNumber}
          </div>
        </div>
      </div>

      {/* 2. White Content Area with Watermark Logo in Background */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          padding: '24px 24px 26px 24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Refined Brand Logo Watermark Centered Behind Text */}
        <div
          style={{
            position: 'absolute',
            top: '52%',
            left: '50%',
            width: '320px',
            height: '180px',
            transform: isHovered
              ? 'translate(-50%, -50%) scale(1.04)'
              : 'translate(-50%, -50%) scale(1)',
            opacity: isHovered ? 0.12 : 0.08,
            filter: 'grayscale(20%) brightness(1.2) contrast(0.85)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={logo} alt="" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>

        {/* Content Layers (Front z-index) */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Subtitle & Title */}
          <div style={{ marginBottom: '12px' }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: accentColor,
                display: 'block',
                marginBottom: '6px',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
            >
              {subtitle}
            </span>
            <h3
              style={{
                color: '#090D16',
                fontSize: '1.28rem',
                fontWeight: 800,
                lineHeight: '1.25',
                letterSpacing: '-0.01em',
                margin: 0,
                textShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
              }}
            >
              {title}
            </h3>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.88rem',
              color: '#334155',
              fontWeight: 500,
              lineHeight: '1.6',
              marginBottom: '20px',
              textShadow: '0 0 12px rgba(255, 255, 255, 0.95), 0 0 2px #FFFFFF',
            }}
          >
            {description}
          </p>

          {/* Key Features / Highlights */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '24px',
              flexGrow: 1,
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.86rem',
                  color: '#0B0F19',
                  lineHeight: '1.45',
                  fontWeight: 600,
                  textShadow: '0 0 12px rgba(255, 255, 255, 0.95), 0 0 2px #FFFFFF',
                }}
              >
                <CheckCircle2
                  size={17}
                  color={accentColor}
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <span>
                  <AnimatedCounter text={item} />
                </span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '12px',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              paddingTop: '20px',
              marginTop: 'auto',
            }}
          >
            <Link
              href={route}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 18px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                backgroundColor: isHovered ? accentColor : '#0F172A',
                color: isHovered ? '#0F172A' : '#FFFFFF',
                border: `1px solid ${isHovered ? accentColor : '#0F172A'}`,
                boxShadow: isHovered ? `0 4px 18px ${glowColor}` : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Explore Division</span>
              <ArrowRight
                size={14}
                style={{
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            </Link>

            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = '0 6px 22px rgba(37, 211, 102, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.35)';
              }}
              title="Inquire on WhatsApp"
              aria-label="Inquire on WhatsApp"
            >
              <WhatsAppIcon size={22} color="#FFFFFF" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
