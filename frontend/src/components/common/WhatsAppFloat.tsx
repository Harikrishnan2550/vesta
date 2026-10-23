'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { X } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Get contextual message based on current route
  let customMessage = 'Hello Vesta Future, I would like to inquire about your corporate services.';
  let divisionTitle = 'Vesta Future Group';

  if (pathname.includes('construction')) {
    customMessage = siteConfig.divisions.construction.whatsappMessage;
    divisionTitle = 'Builders & Developers';
  } else if (pathname.includes('crabs-fish')) {
    customMessage = siteConfig.divisions.crabsFish.whatsappMessage;
    divisionTitle = 'The Seagull Crabs & Fish';
  } else if (pathname.includes('sports')) {
    customMessage = siteConfig.divisions.sports.whatsappMessage;
    divisionTitle = 'Sports Infrastructure';
  }

  const waUrl = getWhatsAppLink(customMessage);

  // Do not render floating WhatsApp on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {/* Tooltip Card */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#1D1D1F',
            border: '1px solid rgba(245, 166, 35, 0.4)',
            borderRadius: '12px',
            padding: '16px',
            width: '280px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)',
            color: '#FFFFFF',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {divisionTitle}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                padding: '2px',
              }}
            >
              <X size={16} />
            </button>
          </div>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '14px',
              lineHeight: '1.4',
            }}
          >
            Chat with our team directly on WhatsApp for immediate assistance.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ width: '100%', fontSize: '0.78rem', padding: '9px 14px', justifyContent: 'center' }}
          >
            <div className="btn-icon-circle" style={{ width: '22px', height: '22px', borderRadius: '6px' }}>
              <WhatsAppIcon size={14} color="#FFFFFF" />
            </div>
            <span>Open WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact on WhatsApp"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 60%, #047857 100%)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.28)',
          boxShadow: '0 12px 28px -4px rgba(16, 185, 129, 0.5), 0 4px 12px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(16, 185, 129, 0.65), 0 6px 16px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.65)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(16, 185, 129, 0.5), 0 4px 12px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.45)';
        }}
      >
        <WhatsAppIcon size={28} color="#FFFFFF" />
      </button>
    </div>
  );
};
