'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DynamicGallery } from '@/components/gallery/DynamicGallery';
import {
  Fish,
  Waves,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  ArrowRight,
  Sparkles,
  Layers,
  Building2,
  MapPin,
  Mail,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export default function CrabsFishPage() {
  const division = siteConfig.divisions.crabsFish;
  const waUrl = getWhatsAppLink(division.whatsappMessage);

  return (
    <div style={{ backgroundColor: '#070709', color: '#FFFFFF', overflow: 'hidden' }}>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '90px',
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
            background: 'radial-gradient(circle, rgba(42, 198, 226, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(42, 198, 226, 0.15)',
                    border: '1px solid var(--seagull-blue)',
                    color: '#2AC6E2',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Aquaculture Division
                </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                  A Vesta Future Concern
                </span>
              </div>

              <h1
                className="heading-display"
                style={{
                  fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                  color: '#FFFFFF',
                  lineHeight: '1.12',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                THE SEAGULL — CRAB &amp; FISH HATCHERY
              </h1>

              <p
                className="text-lead"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1.08rem',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                }}
              >
                The specialized crab and fish hatchery division within the Vesta Future business
                group, dedicated to scientific hatchery and aquaculture operations.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '14px 28px' }}
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  Inquire on WhatsApp
                </a>
                <a
                  href="#overview"
                  className="btn btn-outline-light"
                  style={{ padding: '14px 28px' }}
                >
                  View Hatchery Overview
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Visual Media with Floating Brand Logo Badge */}
            <div
              style={{
                position: 'relative',
                height: 'clamp(280px, 42vw, 460px)',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(42, 198, 226, 0.35)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
              }}
            >
              <Image
                src="/images/hero/crabs-fish.jpg"
                alt="The Seagull Crab & Fish Hatchery"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />

              {/* Floating Division Logo Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  width: '136px',
                  height: '74px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  borderRadius: '14px',
                  padding: '8px 12px',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 3,
                }}
              >
                <Image
                  src={division.logo}
                  alt="The Seagull — Crab & Fish Hatchery"
                  fill
                  style={{ objectFit: 'contain', padding: '4px' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HATCHERY DIVISION OVERVIEW                                             */}
      {/* ========================================================================= */}
      <section
        id="overview"
        className="section-padding"
        style={{
          backgroundColor: '#070709',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Hatchery Operations"
            title="Scientific Crab &amp; Fish Hatchery Focus"
            subtitle="The Seagull operates as a dedicated aquaculture and hatchery business within the Vesta Future group ecosystem."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '28px',
              marginBottom: '48px',
            }}
          >
            {/* Card 1 */}
            <div
              className="card-luxury"
              style={{
                backgroundColor: '#121216',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(42, 198, 226, 0.12)',
                  border: '1px solid rgba(42, 198, 226, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Waves size={26} color="#2AC6E2" />
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Crab Hatchery Operations
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: '1.65',
                  margin: 0,
                }}
              >
                Specialized hatchery environments dedicated to controlled crab seed cultivation,
                water salinity monitoring, and biological stewardship.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="card-luxury"
              style={{
                backgroundColor: '#121216',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(42, 198, 226, 0.12)',
                  border: '1px solid rgba(42, 198, 226, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Fish size={26} color="#2AC6E2" />
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Fish Hatchery Systems
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: '1.65',
                  margin: 0,
                }}
              >
                Modern aquatic tanks and filtration systems engineered for scientific fish hatchery
                operations adhering to biosecurity practices.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="card-luxury"
              style={{
                backgroundColor: '#121216',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(42, 198, 226, 0.12)',
                  border: '1px solid rgba(42, 198, 226, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <ShieldCheck size={26} color="#2AC6E2" />
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Aquaculture Facility Stewardship
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: '1.65',
                  margin: 0,
                }}
              >
                Part of the diversified Vesta Future Pvt. Ltd. portfolio, ensuring disciplined
                operational governance and sustainable coastal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DYNAMIC GALLERY                                                        */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#0E0E12' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Project Visuals"
            title="The Seagull Facility Gallery"
            subtitle="Visual documentation of hatchery tanks, aquaculture facilities, and marine operations."
            align="center"
          />

          <DynamicGallery initialCategory="crabs-fish" showFilters={false} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONTACT BANNER                                                         */}
      {/* ========================================================================= */}
      <section
        className="section-padding-sm"
        style={{
          backgroundColor: '#121216',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 800,
              color: '#2AC6E2',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: '10px',
            }}
          >
            THE SEAGULL — CRAB &amp; FISH HATCHERY
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '16px' }}>
            Inquire About Hatchery Operations
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '620px',
              margin: '0 auto 30px auto',
              fontSize: '0.95rem',
              lineHeight: '1.65',
            }}
          >
            Connect directly with The Seagull management for inquiries regarding crab &amp; fish
            hatchery operations.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '14px 32px' }}
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            Connect on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
