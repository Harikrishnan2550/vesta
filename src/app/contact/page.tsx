import React from 'react';
import { Metadata } from 'next';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/common/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Building2,
  ExternalLink,
  Navigation,
  Compass,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'Contact Corporate Headquarters | Vesta Future Pvt Ltd',
  description:
    'Contact Vesta Future Pvt Ltd at NH 66, Pulimootil Building, Cheppad P.O., Cheppad, Alappuzha, Kerala. Direct WhatsApp +91 95668 66144, phone, email, map, and inquiry form.',
};

export default function ContactPage() {
  const waUrl = getWhatsAppLink(
    'Hello, I would like to connect with Vesta Future Pvt. Ltd. corporate office.'
  );

  return (
    <div style={{ backgroundColor: '#070709', color: '#FFFFFF', overflow: 'hidden' }}>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          backgroundColor: '#0E0E12',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(245, 166, 35, 0.12)',
                border: '1px solid rgba(245, 166, 35, 0.35)',
                color: 'var(--gold-primary)',
                padding: '6px 14px',
                borderRadius: '30px',
                fontSize: '0.76rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <Sparkles size={14} />
              Corporate Communications &amp; Inquiries
            </div>

            <h1
              className="heading-display"
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                color: '#FFFFFF',
                lineHeight: '1.14',
                marginBottom: '18px',
                textTransform: 'uppercase',
              }}
            >
              Contact Vesta Future Headquarters
            </h1>

            <p
              className="text-lead"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.08rem',
                lineHeight: '1.7',
                marginBottom: '28px',
              }}
            >
              Reach out directly to our corporate leadership team for civil engineering contracts,
              turnkey sports facility execution, scientific hatchery systems, or executive inquiries.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '14px 28px' }}
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                WhatsApp: +91 95668 66144
              </a>
              <a
                href="tel:+919566866144"
                className="btn btn-outline-gold"
                style={{ padding: '14px 28px' }}
              >
                <Phone size={18} />
                Call: +91 95668 66144
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTACT DETAILS & INQUIRY FORM                                         */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
            }}
          >
            {/* Left Column: HQ Cards & Direct Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Registered Address Card */}
              <div
                style={{
                  backgroundColor: '#121216',
                  padding: '30px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 166, 35, 0.12)',
                      border: '1px solid rgba(245, 166, 35, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} color="var(--gold-primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '6px' }}>
                      Registered Headquarters
                    </h3>
                    <address
                      style={{
                        fontStyle: 'normal',
                        fontSize: '0.92rem',
                        lineHeight: '1.65',
                        color: 'rgba(255, 255, 255, 0.72)',
                      }}
                    >
                      <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>
                        Vesta Future Pvt. Ltd.
                      </strong>
                      NH 66, Pulimootil Building<br />
                      Cheppad P.O., Cheppad<br />
                      Alappuzha, Kerala, India
                    </address>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Connect Card */}
              <div
                style={{
                  backgroundColor: 'linear-gradient(145deg, #121614 0%, #0D120F 100%)',
                  padding: '30px',
                  borderRadius: '16px',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(37, 211, 102, 0.08)',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid rgba(37, 211, 102, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <WhatsAppIcon size={24} color="#25D366" />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: '#25D366',
                        letterSpacing: '0.1em',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      Instant WhatsApp Channel
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '6px' }}>
                      +91 95668 66144
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px', lineHeight: '1.5' }}>
                      Direct messaging line for fast-track project quotes, technical specifications, and corporate consultations.
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                    >
                      <WhatsAppIcon size={16} color="#FFFFFF" />
                      Chat on WhatsApp (+91 95668 66144)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email & Phone Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                }}
              >
                {/* Phone Card */}
                <div
                  style={{
                    backgroundColor: '#121216',
                    padding: '24px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <Phone size={20} color="var(--gold-primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Direct Phone Line
                  </div>
                  <a
                    href="tel:+919566866144"
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginTop: '6px',
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    +91 95668 66144
                  </a>
                </div>

                {/* Email Card */}
                <div
                  style={{
                    backgroundColor: '#121216',
                    padding: '24px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <Mail size={20} color="var(--gold-primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--gold-primary)',
                      marginTop: '6px',
                      display: 'block',
                      wordBreak: 'break-all',
                      textDecoration: 'none',
                    }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div
                style={{
                  backgroundColor: '#121216',
                  padding: '22px 26px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Instagram size={22} color="var(--gold-primary)" />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>Instagram Profile</div>
                    <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.55)' }}>
                      Follow group developments
                    </div>
                  </div>
                </div>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold btn-sm"
                  style={{ padding: '8px 16px' }}
                >
                  View Profile <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right Column: Executive Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE MAP & OFFICE LOCATION SECTION                              */}
      {/* ========================================================================= */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#0E0E12',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
            <span
              style={{
                fontFamily: 'var(--font-hero)',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Headquarters Location
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: '1.2',
                marginBottom: '12px',
              }}
            >
              Visit Our Corporate Office
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0, lineHeight: '1.65' }}>
              Conveniently located directly along National Highway 66 (NH 66) at Cheppad, Alappuzha, Kerala.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '28px',
              background: 'linear-gradient(145deg, #14141A 0%, #0E0E12 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.7)',
            }}
          >
            {/* Embedded Google Map */}
            <div style={{ position: 'relative', width: '100%', height: '420px' }}>
              <iframe
                title="Vesta Future Headquarters Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15743.435773176712!2d76.4719582!3d9.2435728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061c0282bc7fc1%3A0x89791eb7ce1b5d12!2sCheppad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(95%)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Info Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  maxWidth: '480px',
                  backgroundColor: 'rgba(14, 14, 20, 0.92)',
                  border: '1px solid rgba(245, 166, 35, 0.35)',
                  backdropFilter: 'blur(16px)',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="var(--gold-primary)" />
                  <span style={{ fontWeight: 800, fontSize: '0.96rem', color: '#FFFFFF' }}>
                    NH 66, Pulimootil Building, Cheppad P.O., Alappuzha
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                  <a
                    href="https://maps.google.com/?q=Cheppad,Alappuzha,Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href="tel:+919566866144"
                    className="btn btn-outline-gold btn-sm"
                  >
                    <Phone size={14} />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR REGIONAL & GLOBAL PRESENCE                                         */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Strategic Reach"
            title="Our Presence"
            subtitle="Vesta Future serves clients across key regions in southern India and overseas:"
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {siteConfig.presence.map((loc, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{
                  backgroundColor: '#121216',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    border: '1px solid rgba(245, 166, 35, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <MapPin size={22} color="var(--gold-primary)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                  {loc}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
