'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { MapPin, Phone, Mail, Instagram, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0E0E10',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(245, 166, 35, 0.2)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Column 1: Parent Brand Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ width: '230px', height: '60px', position: 'relative' }}>
              <Image
                src="/logos/vesta-group.png"
                alt="Vesta Future Pvt Ltd"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: '340px',
              }}
            >
              Vesta Future Pvt Ltd is a premier multi-sector business group headquartered in Kerala,
              driving innovation across real estate development, sustainable aquaculture, and sports
              infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                  e.currentTarget.style.color = '#121214';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} color="currentColor" />
              </a>
            </div>
          </div>

          {/* Column 2: Business Divisions */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold-primary)',
                marginBottom: '24px',
              }}
            >
              Business Divisions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <Link
                  href="/construction"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Builders & Developers</span>
                  <ArrowUpRight size={14} opacity={0.6} />
                </Link>
              </li>
              <li>
                <Link
                  href="/crabs-fish"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>The Seagull Crabs & Fish</span>
                  <ArrowUpRight size={14} opacity={0.6} />
                </Link>
              </li>
              <li>
                <Link
                  href="/sports"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>De Sports Infrastructure</span>
                  <ArrowUpRight size={14} opacity={0.6} />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>About Vesta Group</span>
                  <ArrowUpRight size={14} opacity={0.6} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Headquarters */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold-primary)',
                marginBottom: '24px',
              }}
            >
              Registered Address
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <address
                  style={{
                    fontStyle: 'normal',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.75)',
                  }}
                >
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>Vesta Future Pvt Ltd</strong>
                  NH 66, Pulimootil Building<br />
                  Cheppad P.O., Cheppad<br />
                  Alappuzha, Kerala, India
                </address>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={16} color="var(--gold-primary)" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={16} color="var(--gold-primary)" />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  {siteConfig.contact.phoneDisplay}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: WhatsApp Direct Connect */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold-primary)',
                marginBottom: '24px',
              }}
            >
              Direct Connect
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '16px' }}>
              Connect with our corporate team directly via WhatsApp for business inquiries and partnerships.
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello Vesta Future, I would like to inquire about your business services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ width: '100%' }}
            >
              <WhatsAppIcon size={16} color="#FFFFFF" />
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.78rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            © {currentYear} <strong>Vesta Future Pvt Ltd</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Corporate Profile
            </Link>
            <Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Headquarters
            </Link>
            <Link href="/admin/login" style={{ color: 'var(--gold-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
