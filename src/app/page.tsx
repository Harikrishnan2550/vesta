'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { DivisionCard } from '@/components/home/DivisionCard';
import { DynamicGallery } from '@/components/gallery/DynamicGallery';
import { SectionHeading } from '@/components/common/SectionHeading';
import TrajectoryExperience from '@/components/home/TrajectoryExperience';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Trophy,
  Fish,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
  Compass,
  Hammer,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export default function HomePage() {
  const [activeDivIdx, setActiveDivIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const SECTORS = [
    {
      id: '01',
      name: 'Vesta Future Group',
      category: 'Parent Enterprise',
      desc: 'Corporate Holdings & Enterprise Leadership',
      route: '/about',
      img: '/images/hero/corporate.jpg',
      accentColor: '#F5A623',
      glowColor: 'rgba(245, 166, 35, 0.45)',
    },
    {
      id: '02',
      name: 'Builders & Developers',
      category: 'Construction & Real Estate',
      desc: 'Architectural Plans, Turnkey Builds & Interiors',
      route: '/construction',
      img: '/images/hero/construction.jpg',
      accentColor: '#F5A623',
      glowColor: 'rgba(245, 166, 35, 0.45)',
    },
    {
      id: '03',
      name: 'Sports Infrastructure',
      category: 'Turnkey Sports Facilities',
      desc: 'Turf Construction, Stadiums & High-Performance Courts',
      route: '/sports',
      img: '/images/hero/sports.jpg',
      accentColor: '#F5A623',
      glowColor: 'rgba(245, 166, 35, 0.45)',
    },
    {
      id: '04',
      name: 'The Seagull',
      category: 'Aquaculture & Hatchery',
      desc: 'Crab & Fish Hatchery Operations & Systems',
      route: '/crabs-fish',
      img: '/images/hero/crabs-fish.jpg',
      accentColor: '#2AC6E2',
      glowColor: 'rgba(42, 198, 226, 0.45)',
    },
  ];

  // The first section (01) is active by default; changes when user hovers or taps another section

  return (
    <div style={{ backgroundColor: '#070709', color: '#FFFFFF', overflow: 'hidden' }}>
      {/* ========================================================================= */}
      {/* 1. 4-SECTOR INTERACTIVE ACCORDION HERO SECTION                             */}
      {/* ========================================================================= */}
      <section
        className="hero-section-root"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left-Center Vertical Arrow Navigation Controls */}
        <div
          className="hero-vertical-nav-controls"
          role="group"
          aria-label="Section Navigation"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveDivIdx((curr) => (curr - 1 + SECTORS.length) % SECTORS.length);
            }}
            className="hero-nav-arrow-btn"
            aria-label="Previous Section"
            title="Previous Section"
          >
            <ChevronUp size={18} strokeWidth={2.5} />
          </button>

          <div className="hero-nav-counter">
            <span className="hero-nav-counter-current">
              {SECTORS[activeDivIdx].id}
            </span>
            <div className="hero-nav-counter-divider" />
            <span className="hero-nav-counter-total">0{SECTORS.length}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveDivIdx((curr) => (curr + 1) % SECTORS.length);
            }}
            className="hero-nav-arrow-btn"
            aria-label="Next Section"
            title="Next Section"
          >
            <ChevronDown size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Interactive Accordion Pillars (Mobile Stacked / Desktop Side-by-side) */}
        <div className="hero-accordion-container">
          {SECTORS.map((sector, index) => {
            const isActive = activeDivIdx === index;

            return (
              <div
                key={sector.id}
                onClick={() => setActiveDivIdx(index)}
                onMouseEnter={() => setActiveDivIdx(index)}
                className={`hero-pillar-item ${isActive ? 'is-active' : ''}`}
                style={{
                  flex: isActive ? '5.5 1 0%' : '1.8 1 0%',
                  height: '100%',
                }}
              >
                {/* Background Image with Zoom & Grayscale Transitions */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-2%',
                    width: '104%',
                    height: '104%',
                    backgroundImage: `url(${sector.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isActive ? 'scale(1)' : 'scale(1.1)',
                    filter: isActive
                      ? 'grayscale(0%) brightness(0.9) contrast(1.05)'
                      : 'grayscale(40%) brightness(0.35) contrast(0.95)',
                    transition:
                      'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1), filter 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
                    willChange: 'transform, filter',
                  }}
                />

                {/* Gradient Overlays */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(5, 5, 5, 0.95) 0%, rgba(5, 5, 5, 0.45) 50%, rgba(5, 5, 5, 0.25) 100%)',
                    opacity: 0.9,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 30% 60%, ${sector.glowColor} 0%, transparent 65%)`,
                    opacity: isActive ? 0.75 : 0,
                    transition: 'opacity 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
                  }}
                />

                {/* DESKTOP Inactive State: Centered Vertical Text */}
                <div
                  className="hero-pillar-inactive-desktop"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    opacity: isActive ? 0 : 1,
                    transition: 'opacity 0.4s ease',
                    zIndex: 4,
                  }}
                >
                  <span
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      fontFamily: 'var(--font-hero)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.75)',
                      whiteSpace: 'nowrap',
                      textShadow: '0 2px 14px rgba(0, 0, 0, 0.95)',
                    }}
                  >
                    {sector.name}
                  </span>
                </div>

                {/* MOBILE Inactive State: Horizontal Row with ID & Chevron */}
                <div
                  className="hero-pillar-inactive-mobile"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    opacity: isActive ? 0 : 1,
                    transition: 'opacity 0.35s ease',
                    zIndex: 4,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.2em',
                        color: 'var(--gold-primary)',
                        backgroundColor: 'rgba(245, 166, 35, 0.12)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(245, 166, 35, 0.3)',
                      }}
                    >
                      {sector.id}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-hero)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.92)',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.85)',
                      }}
                    >
                      {sector.name}
                    </span>
                  </div>

                  <div
                    className="animate-pulse-chevron"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="rgba(255, 255, 255, 0.85)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Active State Content: Centered Section Name & Explore Button */}
                <div
                  className="hero-pillar-active-content"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(0.96)',
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition:
                      'opacity 0.45s cubic-bezier(0.76, 0, 0.24, 1) 0.1s, transform 0.45s cubic-bezier(0.76, 0, 0.24, 1) 0.1s',
                  }}
                >
                  <div style={{ width: '100%', maxWidth: '640px' }}>
                    {/* Section Name with Animated Light Sweep */}
                    <Link
                      href={sector.route}
                      style={{
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                    >
                      <h2
                        className="hero-text-shimmer"
                        style={{
                          fontFamily: 'var(--font-hero)',
                          fontSize: 'clamp(1.45rem, 2.8vw, 2.8rem)',
                          fontWeight: 800,
                          lineHeight: 1.15,
                          textTransform: 'uppercase',
                          letterSpacing: '0.01em',
                          margin: 0,
                          textAlign: 'center',
                          wordBreak: 'break-word',
                        }}
                      >
                        {sector.name}.
                      </h2>
                    </Link>
                  </div>

                  {/* Transparent Button with Running Thin Yellow Light Border */}
                  <Link
                    href={sector.route}
                    className="hero-rgb-btn"
                    aria-label={`Explore ${sector.name}`}
                  >
                    <div className="hero-rgb-btn-inner">
                      <span className="hero-pill-text">Explore Division</span>
                      <div className="hero-pill-icon">
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Indicator Dots (Desktop only) */}
        <div
          className="hero-pillar-inactive-desktop"
          style={{
            position: 'absolute',
            bottom: '24px',
            right: 'clamp(24px, 4vw, 48px)',
            zIndex: 10,
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(7, 7, 9, 0.65)',
            backdropFilter: 'blur(12px)',
            padding: '8px 16px',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {SECTORS.map((sector, idx) => (
            <button
              key={sector.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveDivIdx(idx);
              }}
              aria-label={`Go to ${sector.name}`}
              style={{
                width: activeDivIdx === idx ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor:
                  activeDivIdx === idx
                    ? sector.accentColor
                    : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE CORE BUSINESS DIVISIONS (EXACT PROMPT COPY)                       */}
      {/* ========================================================================= */}
      <section
        id="businesses"
        className="section-padding"
        style={{
          backgroundColor: '#0A0A0D',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245, 166, 35, 0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 85% 60%, rgba(42, 198, 226, 0.05) 0%, transparent 60%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Our Businesses"
            title="Three Dedicated Operating Divisions"
            subtitle="From our roots in construction to specialized sports infrastructure and aquaculture, Vesta Future continues to expand its capabilities across diverse sectors."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Division 1: Builders & Developers */}
            <DivisionCard
              divisionNumber="01"
              title="Vesta Future Builders & Developers"
              subtitle="Division 01 • Construction & Buildings"
              description="Residential construction, architectural plans, renovations, interior design and turnkey building solutions."
              image="/images/hero/construction.jpg"
              logo="/logo/Vesta_Future_Builders_Developers_Logo.png"
              route="/construction"
              badgeText="Construction & Development"
              highlights={[
                'Residential Construction & Budget Homes',
                '2D/3D Plans & Architectural Elevations',
                'Renovations & Modern Interior Design',
                'Landscaping & Real Estate Development',
              ]}
              whatsappMessage={siteConfig.divisions.construction.whatsappMessage}
              accentColor="#D98200"
              glowColor="rgba(217, 130, 0, 0.3)"
            />

            {/* Division 2: Sports Infrastructure */}
            <DivisionCard
              divisionNumber="02"
              title="Vesta Future De Sports Infrastructure Pvt. Ltd."
              subtitle="Division 02 • Turnkey Sports Infrastructure"
              description="End-to-end sports infrastructure solutions from planning and construction to surface installation and handover."
              image="/images/hero/sports.jpg"
              logo="/logo/Vesta_Sports.png"
              route="/sports"
              badgeText="Sports Infrastructure"
              highlights={[
                'Multi-Sport Turfs & Cricket Pitches',
                'Indoor Badminton & Volleyball Courts',
                'Indoor Stadiums, Swimming Pools & Gyms',
                '10+ Years Turf Construction Experience',
              ]}
              whatsappMessage={siteConfig.divisions.sports.whatsappMessage}
              accentColor="#D98200"
              glowColor="rgba(217, 130, 0, 0.3)"
            />

            {/* Division 3: The Seagull */}
            <DivisionCard
              divisionNumber="03"
              title="The Seagull — Crab & Fish Hatchery"
              subtitle="Division 03 • Aquaculture & Hatchery"
              description="Crab and fish hatchery operations within the Vesta Future business group."
              image="/images/hero/crabs-fish.jpg"
              logo="/logo/Vesta_Future_Crabs_Fish_Logo.png"
              route="/crabs-fish"
              badgeText="Crab & Fish Hatchery"
              highlights={[
                'Crab Hatchery Operations',
                'Fish Hatchery Systems',
                'Aquaculture Facility Management',
                'Vesta Future Group Concern',
              ]}
              whatsappMessage={siteConfig.divisions.crabsFish.whatsappMessage}
              accentColor="#0891B2"
              glowColor="rgba(8, 145, 178, 0.3)"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPANY STORY & FOUNDATION (NEXUS INTERACTIVE TRAJECTORY EXPERIENCE)   */}
      {/* ========================================================================= */}
      <TrajectoryExperience />

      {/* ========================================================================= */}
      {/* 4. COMPANY PRESENCE (KERALA, TAMIL NADU, PUDUCHERRY, DUBAI)               */}
      {/* ========================================================================= */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#0E0E12',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Our Footprint"
            title="Company Presence"
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
                  backgroundColor: '#16161D',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    border: '1px solid rgba(245, 166, 35, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <MapPin size={24} color="var(--gold-primary)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                  {loc}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DYNAMIC GROUP GALLERY                                                  */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Project Visuals"
            title="Featured Portfolio"
            subtitle="Showcasing completed projects across construction, sports facilities, and hatchery operations."
            align="center"
          />

          <DynamicGallery showFilters={true} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT CTA                                                            */}
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
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: '10px',
            }}
          >
            VESTA FUTURE PVT. LTD.
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '16px' }}>
            Connect With Our Specialized Divisions
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '620px',
              margin: '0 auto 32px auto',
              fontSize: '0.95rem',
              lineHeight: '1.65',
            }}
          >
            Headquartered at NH 66, Pulimootil Building, Cheppad P.O., Alappuzha, Kerala.
            Reach our team directly for inquiries across all business divisions.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '14px 28px' }}
            >
              <WhatsAppIcon size={18} color="#FFFFFF" />
              Connect on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-outline-light" style={{ padding: '14px 28px' }}>
              Corporate Contact Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
