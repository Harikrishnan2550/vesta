'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DynamicGallery } from '@/components/gallery/DynamicGallery';
import {
  Trophy,
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  GraduationCap,
  Home,
  Briefcase,
  Compass,
  Hammer,
  Award,
  CircleDot,
  Flame,
  Globe2,
  MapPin,
  Mail,
  Zap,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export default function SportsPage() {
  const division = siteConfig.divisions.sports;
  const waUrl = getWhatsAppLink(division.whatsappMessage);

  // 8 Facilities
  const facilities = [
    {
      code: 'FAC-01',
      title: 'Multi-sport Turfs',
      desc: 'All-weather synthetic grass turf systems engineered with high-resilience monofilament yarn and rapid subsurface drainage.',
      icon: Trophy,
      accent: '#F5A623',
      themeClass: 'facility-theme-gold',
      specs: ['High-resilience monofilament yarn', 'Laser-graded rapid sub-drainage'],
    },
    {
      code: 'FAC-02',
      title: 'Indoor Badminton Courts',
      desc: 'BWF-standard sprung hardwood timber (maple/teak) flooring and multi-layer cushioned PVC synthetic sports vinyl.',
      icon: Activity,
      accent: '#2AC6E2',
      themeClass: 'facility-theme-cyan',
      specs: ['BWF-certified sprung hardwood', 'Multi-layer PVC cushion vinyl'],
    },
    {
      code: 'FAC-03',
      title: 'Volleyball Courts',
      desc: 'Outdoor and indoor volleyball surfaces engineered with seamless polyurethane or cushioned acrylic systems.',
      icon: CircleDot,
      accent: '#10B981',
      themeClass: 'facility-theme-emerald',
      specs: ['Seamless polyurethane matrix', 'High shock & impact damping'],
    },
    {
      code: 'FAC-04',
      title: 'Multi-purpose Synthetic Sports Grounds',
      desc: 'Versatile synthetic arenas designed for multi-sport versatility—futsal, basketball, volleyball, and tennis on a single surface.',
      icon: Layers,
      accent: '#F5A623',
      themeClass: 'facility-theme-gold',
      specs: ['Multi-sport hybrid line marking', 'UV-stable all-weather acrylic'],
    },
    {
      code: 'FAC-05',
      title: 'Indoor Stadiums',
      desc: 'Turnkey indoor sports arena construction including structural steel roofing, anti-glare high-mast sports LED lighting, and seating.',
      icon: Building2,
      accent: '#2AC6E2',
      themeClass: 'facility-theme-cyan',
      specs: ['Structural steel roof spans', 'Anti-glare high-mast sports LED'],
    },
    {
      code: 'FAC-06',
      title: 'Indoor Swimming Pools',
      desc: 'Aquatic complexes featuring temperature-controlled circulation, anti-microbial tiling, underwater lighting, and drainage.',
      icon: Flame,
      accent: '#10B981',
      themeClass: 'facility-theme-emerald',
      specs: ['Automated temperature control', 'Anti-microbial & anti-slip tiling'],
    },
    {
      code: 'FAC-07',
      title: 'Gyms & Fitness Facilities',
      desc: 'Custom gym architecture, heavy-duty acoustic rubber flooring, cross-functional training zones, and fitness amenities.',
      icon: Award,
      accent: '#F5A623',
      themeClass: 'facility-theme-gold',
      specs: ['Heavy-duty acoustic rubber', 'Cross-training load resistance'],
    },
    {
      code: 'FAC-08',
      title: 'Synthetic Sports Surfaces',
      desc: 'Cushioned acrylic sports flooring, EPDM rubber safety surfacing, and polyurethane running tracks resistant to UV weathering.',
      icon: Sparkles,
      accent: '#2AC6E2',
      themeClass: 'facility-theme-cyan',
      specs: ['EPDM rubber safety surfacing', 'UV-resistant running tracks'],
    },
  ];

  // 6 Confirmed Segments
  const ourSegments = [
    {
      num: '01',
      title: 'Football Turf Installation',
      desc: 'All-weather 5s, 7s, and 11s artificial grass football turfs with resilient infill and laser-graded drainage.',
      icon: Trophy,
      accent: '#F5A623',
      themeClass: 'segment-theme-gold',
      tags: ['FIFA Quality Turf', 'Laser Sub-Drainage'],
    },
    {
      num: '02',
      title: 'Cricket Turf & Synthetic Cricket Pitches',
      desc: 'High-density synthetic cricket pitches, practice nets, and full cricket turf boxes with natural ball bounce.',
      icon: Activity,
      accent: '#2AC6E2',
      themeClass: 'segment-theme-cyan',
      tags: ['High-Density Yarn', 'Natural Ball Bounce'],
    },
    {
      num: '03',
      title: 'Indoor Badminton Court Construction',
      desc: 'BWF-standard sprung wooden (maple/teak) or synthetic PVC cushioned badminton court installations.',
      icon: Zap,
      accent: '#10B981',
      themeClass: 'segment-theme-emerald',
      tags: ['BWF Sprung Hardwood', 'Multi-Layer Cushion'],
    },
    {
      num: '04',
      title: 'Indoor Volleyball, Basketball & Multi-Sport Fields',
      desc: 'Multi-sport indoor & outdoor acrylic/polyurethane arenas engineered for high athletic grip and safety.',
      icon: Layers,
      accent: '#F5A623',
      themeClass: 'segment-theme-gold',
      tags: ['PU & Acrylic Arenas', 'Athletic Grip & Safety'],
    },
    {
      num: '05',
      title: 'Indoor Swimming Pools',
      desc: 'Modern aquatic complexes with automated filtration, temperature control, and anti-slip deck surrounds.',
      icon: Flame,
      accent: '#2AC6E2',
      themeClass: 'segment-theme-cyan',
      tags: ['Automated Filtration', 'Anti-Slip Deck Surrounds'],
    },
    {
      num: '06',
      title: 'Skating Ground & College Sports Ground Setup',
      desc: 'Smooth acrylic roller skating rinks and full-scale campus sports complex civil development.',
      icon: CircleDot,
      accent: '#10B981',
      themeClass: 'segment-theme-emerald',
      tags: ['Precision Acrylic Rinks', 'Campus Turnkey Civil'],
    },
  ];

  // 6 Key Features
  const keyFeatures = [
    {
      icon: Globe2,
      title: '10+ Years Experience',
      desc: '10+ years of turf construction experience across India and international projects.',
      accent: '#F5A623',
      glowClass: 'sports-glow-gold',
    },
    {
      icon: Compass,
      title: 'Challenging Installations',
      desc: 'Expertise in challenging installations, including indoor sports turf and outdoor gym areas.',
      accent: '#2AC6E2',
      glowClass: 'sports-glow-cyan',
    },
    {
      icon: Hammer,
      title: 'Precision-Engineered Base Work',
      desc: 'Precision-engineered base work for uniform surface levels, consistent performance, and natural ball bounce.',
      accent: '#10B981',
      glowClass: 'sports-glow-emerald',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Warranty',
      desc: 'Safe, durable, and low-maintenance systems backed by a comprehensive 10-year warranty.',
      accent: '#F5A623',
      glowClass: 'sports-glow-gold',
    },
    {
      icon: GraduationCap,
      title: 'Proven Multi-Sector Execution',
      desc: 'Successfully executed projects for schools, colleges, residential developments, sports academies, and other sports facilities.',
      accent: '#2AC6E2',
      glowClass: 'sports-glow-cyan',
    },
    {
      icon: Award,
      title: 'Quality-Focused Execution',
      desc: 'Quality-focused execution with attention to performance, safety, durability, and long-term value.',
      accent: '#10B981',
      glowClass: 'sports-glow-emerald',
    },
  ];

  // Target Clients
  const targetClients = [
    { icon: GraduationCap, title: 'Educational Institutions', desc: 'Schools, colleges, and university campuses.' },
    { icon: Home, title: 'Residential Communities', desc: 'Gated townships, apartments, and luxury residential projects.' },
    { icon: Briefcase, title: 'Commercial Developments & Clubs', desc: 'Commercial pay-and-play sports hubs and private clubs.' },
    { icon: Trophy, title: 'Sports Academies & Arenas', desc: 'Professional training centers and tournament venues.' },
  ];

  return (
    <div style={{ backgroundColor: '#070709', color: '#FFFFFF', overflow: 'hidden' }}>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
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
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, transparent 70%)',
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
                    backgroundColor: 'rgba(245, 166, 35, 0.15)',
                    border: '1px solid var(--gold-primary)',
                    color: 'var(--gold-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Sports Infrastructure
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
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                VESTA FUTURE De SPORTS INFRASTRUCTURE PVT. LTD.
              </h1>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                  fontWeight: 700,
                  color: 'var(--gold-primary)',
                  marginBottom: '18px',
                  letterSpacing: '0.02em',
                }}
              >
                Building Better Spaces for Better Sports.
              </div>

              <p
                className="text-lead"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1.08rem',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                }}
              >
                A professionally driven sports infrastructure company providing comprehensive,
                end-to-end solutions for modern sports facilities across India and overseas.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <div className="btn-icon-circle">
                    <WhatsAppIcon size={16} color="#FFFFFF" />
                  </div>
                  <span>Inquire on WhatsApp</span>
                </a>
                <a
                  href="#segments"
                  className="btn btn-outline-gold"
                >
                  <span>View Our Segments</span>
                  <div className="btn-icon-circle">
                    <ArrowRight size={15} />
                  </div>
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
                border: '1px solid rgba(245, 166, 35, 0.35)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
              }}
            >
              <Image
                src="/images/hero/sports.jpg"
                alt="Vesta Future De Sports Infrastructure"
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
                  alt="Vesta Future De Sports Infrastructure"
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
      {/* 2. ABOUT & TURNKEY LIFECYCLE                                              */}
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
          <div className="sports-overview-grid">
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="End-to-End Turnkey Sports Solutions"
                subtitle="From concept and civil engineering to precision surface installation and handover."
              />

              <p className="sports-overview-lead">
                <strong>Vesta Future De Sports Infrastructure Pvt. Ltd.</strong> is a professionally
                driven sports infrastructure company delivering high-standard turnkey complexes,
                turfs, and athletic facilities engineered for world-class playability and long-term durability.
              </p>

              <div className="sports-overview-features">
                <div className="sports-overview-feature-item">
                  <div className="sports-overview-feature-icon">
                    <Layers size={18} color="var(--gold-primary)" />
                  </div>
                  <div className="sports-overview-feature-text">
                    <strong>Complete Turnkey Specialization</strong>
                    Single-point accountability covering architectural planning, civil sub-base, certified turf installation, and arena lighting.
                  </div>
                </div>

                <div className="sports-overview-feature-item">
                  <div className="sports-overview-feature-icon">
                    <ShieldCheck size={18} color="var(--gold-primary)" />
                  </div>
                  <div className="sports-overview-feature-text">
                    <strong>International Athletic Quality & Safety</strong>
                    Engineered to global sporting standards with focus on athlete safety, natural ball bounce, and high UV weather-resistance.
                  </div>
                </div>
              </div>

              {/* 3 Executive Metrics */}
              <div className="sports-overview-stats">
                <div className="sports-overview-stat-card">
                  <div className="sports-overview-stat-num">10+</div>
                  <div className="sports-overview-stat-label">Years Field Experience</div>
                </div>
                <div className="sports-overview-stat-card">
                  <div className="sports-overview-stat-num">100%</div>
                  <div className="sports-overview-stat-label">Turnkey Execution</div>
                </div>
                <div className="sports-overview-stat-card">
                  <div className="sports-overview-stat-num">10-Yr</div>
                  <div className="sports-overview-stat-label">Warranty Support</div>
                </div>
              </div>
            </div>

            {/* Turnkey Pipeline Card */}
            <div className="turnkey-pipeline-card">
              <div className="turnkey-pipeline-header">
                <div className="turnkey-header-left">
                  <div className="turnkey-shield-icon">
                    <ShieldCheck color="var(--gold-primary)" size={22} />
                  </div>
                  <div>
                    <h3 className="turnkey-title-main">Turnkey Project Lifecycle</h3>
                    <div className="turnkey-subtitle-sub">Seamless Single-Contract Delivery</div>
                  </div>
                </div>
                <span className="turnkey-badge-status">
                  <span className="turnkey-badge-dot" />
                  PHASE 01–06
                </span>
              </div>

              <div className="turnkey-pipeline-list">
                {[
                  {
                    num: '01',
                    title: 'Planning & Topographical Survey',
                    desc: 'Laser terrain leveling, soil bearing analysis & site layout mapping',
                  },
                  {
                    num: '02',
                    title: 'Architectural & Engineering Design',
                    desc: 'CAD sports blueprints, drainage calculation & 3D civil modeling',
                  },
                  {
                    num: '03',
                    title: 'Civil Sub-Base & Drainage Construction',
                    desc: 'Multi-layer aggregate grading, laser levelling & perforated drain networks',
                  },
                  {
                    num: '04',
                    title: 'Certified Surface & Turf Installation',
                    desc: 'FIFA/BWF-grade monofilament grass, sprung timber & shock-pad underlay',
                  },
                  {
                    num: '05',
                    title: 'Arena Lighting & Equipment Finishing',
                    desc: 'Anti-glare high-mast sports LED systems, safety netting & court fixtures',
                  },
                  {
                    num: '06',
                    title: 'Final Quality Inspection & Handover',
                    desc: 'Playability testing, ball rebound certification & client handover package',
                  },
                ].map((step, idx) => (
                  <div key={idx} className="turnkey-stage-item">
                    <span className="turnkey-stage-num">
                      {step.num}
                    </span>
                    <div className="turnkey-stage-info">
                      <h4 className="turnkey-stage-title">
                        {step.title}
                      </h4>
                      <p className="turnkey-stage-desc">
                        {step.desc}
                      </p>
                    </div>
                    <ArrowRight size={16} className="turnkey-stage-arrow" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. KEY FEATURES (EXPERIENCED. RESOURCEFUL. RELIABLE.)                     */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 56px auto' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                marginBottom: '8px',
              }}
            >
              KEY FEATURES
            </div>
            <h2
              className="heading-display"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Experienced. Resourceful. Reliable.
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.82)',
                lineHeight: '1.7',
              }}
            >
              With over 10 years of experience in turf construction, our team delivers professionally
              executed sports surfaces across India and overseas, including challenging project
              locations.
            </p>
          </div>

          <div className="sports-features-grid">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className={`sports-feature-card ${feat.glowClass}`}>
                  <div className="sports-feature-top-glow" />
                  <div className="sports-feature-icon-wrap">
                    <IconComp size={24} color={feat.accent} />
                  </div>

                  <h3 className="sports-feature-title">
                    {feat.title}
                  </h3>

                  <p className="sports-feature-desc">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SEGMENTS (6 CONFIRMED SEGMENTS)                                    */}
      {/* ========================================================================= */}
      <section
        id="segments"
        className="section-padding"
        style={{
          backgroundColor: '#0E0E12',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Specialized Operations"
            title="OUR SEGMENTS"
            subtitle="Explore our core athletic infrastructure segments engineered to international playing standards:"
            align="center"
          />

          <div className="sports-segments-grid">
            {ourSegments.map((seg) => {
              const IconComp = seg.icon;
              return (
                <div
                  key={seg.num}
                  className={`sports-segment-card ${seg.themeClass}`}
                >
                  {/* Top Header: High-Tech Capsule on Left, Architectural Hollow Numeral on Right */}
                  <div className="segment-card-header">
                    <span className="segment-capsule-tag">
                      <span className="segment-capsule-dot" />
                      SEGMENT {seg.num}
                    </span>
                    <span className="segment-hollow-num" aria-hidden="true">
                      {seg.num}
                    </span>
                  </div>

                  {/* Frosted Icon Box */}
                  <div className="segment-icon-box">
                    <IconComp size={22} color={seg.accent} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="segment-card-title">
                    {seg.title}
                  </h3>

                  <p className="segment-card-desc">
                    {seg.desc}
                  </p>

                  {/* Engineering Specification Tags */}
                  <div className="segment-spec-tags">
                    {seg.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="segment-spec-tag">
                        <CheckCircle2 size={12} color={seg.accent} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Animated Laser Rail */}
                  <div className="segment-card-rail" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FACILITIES & SPORTS INFRASTRUCTURE SOLUTIONS (8 AREAS)                 */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Facilities & Infrastructure"
            title="Comprehensive Sports Facility Solutions"
            subtitle="End-to-end construction capabilities spanning indoor and outdoor sports surfaces:"
            align="center"
          />

          <div className="sports-facilities-grid">
            {facilities.map((fac, idx) => {
              const FacIcon = fac.icon;
              return (
                <div
                  key={idx}
                  className={`sports-facility-card ${fac.themeClass}`}
                >
                  {/* Left Vertical Illuminated Edge Spine */}
                  <div className="facility-edge-spine" />

                  {/* Card Header: Disc Icon on Left, Monospace Code Chip on Right */}
                  <div className="facility-card-header">
                    <div className="facility-icon-disc">
                      <FacIcon size={22} color={fac.accent} />
                    </div>
                    <span className="facility-code-badge">
                      {fac.code}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="facility-card-title">
                    {fac.title}
                  </h3>

                  <p className="facility-card-desc">
                    {fac.desc}
                  </p>

                  {/* Engineering Capability Highlights */}
                  <div className="facility-specs-list">
                    {fac.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="facility-spec-item">
                        <span className="facility-spec-bullet" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Target Clients Grid */}
          <div
            style={{
              backgroundColor: '#16161D',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '18px',
              padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 30px)',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginBottom: '8px',
              }}
            >
              Target Clients
            </div>
            <h3
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                color: '#FFFFFF',
                marginBottom: '32px',
              }}
            >
              Reliable Sports Facilities Tailored to Specific Requirements
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '20px',
              }}
            >
              {targetClients.map((tc, tcIdx) => {
                const TcIcon = tc.icon;
                return (
                  <div
                    key={tcIdx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      padding: '20px',
                    }}
                  >
                    <TcIcon size={22} color="var(--gold-primary)" style={{ marginBottom: '10px' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>
                      {tc.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                      {tc.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DYNAMIC GALLERY                                                        */}
      {/* ========================================================================= */}
      <section id="gallery" className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Project Visuals"
            title="Sports Facility Visual Gallery"
            subtitle="Showcasing completed football turfs, cricket pitches, badminton courts, and multi-sport grounds."
            align="center"
          />

          <DynamicGallery initialCategory="sports" showFilters={false} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SMALL CONTACT SECTION                                                  */}
      {/* ========================================================================= */}
      <section
        id="contact"
        className="section-padding-sm"
        style={{
          backgroundColor: '#121216',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: '#16161D',
              border: '1px solid rgba(245, 166, 35, 0.3)',
              borderRadius: '20px',
              padding: 'clamp(28px, 4vw, 56px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(24px, 4vw, 40px)',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '10px',
                }}
              >
                VESTA FUTURE De SPORTS INFRASTRUCTURE PVT. LTD.
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                Get in Touch for Turnkey Sports Solutions
              </h2>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: '1.65',
                  marginBottom: '24px',
                }}
              >
                Connect with our technical engineers for site evaluations, turf specifications,
                budget estimates, and end-to-end sports facility execution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem' }}>
                  <MapPin size={18} color="var(--gold-primary)" />
                  <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    NH 66, Pulimootil Building, Cheppad P.O., Alappuzha, Kerala
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem' }}>
                  <Mail size={18} color="var(--gold-primary)" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(7, 7, 9, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '32px 28px',
                textAlign: 'center',
              }}
            >
              <Trophy size={40} color="var(--gold-primary)" style={{ margin: '0 auto 16px auto' }} />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                Building Better Spaces for Better Sports.
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.65)',
                  marginBottom: '24px',
                }}
              >
                Instant consultation available on WhatsApp.
              </p>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <div className="btn-icon-circle">
                  <WhatsAppIcon size={16} color="#FFFFFF" />
                </div>
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
