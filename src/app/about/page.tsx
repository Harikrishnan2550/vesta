'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import {
  ShieldCheck,
  Building2,
  Trophy,
  Fish,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe2,
  Compass,
  Briefcase,
  Layers,
  ChevronRight,
  TrendingUp,
  Award,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export default function AboutPage() {
  const waUrl = getWhatsAppLink(
    'Hello, I would like to connect with Vesta Future Pvt. Ltd. corporate leadership.'
  );

  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);

  const MILESTONES = [
    {
      year: '2015',
      badge: 'Genesis Phase',
      title: 'Civil Engineering Roots',
      lead: 'Established as an architectural planning and turnkey residential construction firm in Kerala.',
      desc: 'Focused on structural engineering discipline, custom residential builds, and transparent client execution across southern Kerala.',
      icon: Building2,
      accent: '#F5A623',
    },
    {
      year: '2023',
      badge: 'Multi-Sector Scale',
      title: 'Sports & Marine Aquaculture',
      lead: 'Expanded into specialized turnkey sports facilities and scientific marine hatchery bio-systems.',
      desc: 'Constructed FIFA/BWF standard artificial turfs and sports arenas nationwide while launching The Seagull crab & fish hatchery operations.',
      icon: Trophy,
      accent: '#2AC6E2',
    },
    {
      year: 'FEB 2025',
      badge: 'Corporate Entity',
      title: 'Vesta Future Pvt. Ltd.',
      lead: 'Formally transitioned into an incorporated Private Limited corporate entity.',
      desc: 'Consolidated all 3 specialized operating verticals under unified corporate governance, positioning the group for sustained regional and global growth.',
      icon: Sparkles,
      accent: '#10B981',
    },
  ];

  const DIVISIONS = [
    {
      num: '01',
      title: 'Vesta Future Builders & Developers',
      subtitle: 'Construction & Civil Contracting',
      desc: 'The founding pillar of Vesta Future. Delivering turnkey residential builds, structural engineering, 2D/3D elevations, renovations, and interior architecture with a decade of execution excellence.',
      logo: '/logos/vesta-builders.svg',
      route: '/construction',
      accent: '#F5A623',
      tags: ['Civil Contracting', 'Turnkey Residential', 'Architectural Planning', 'Interior Fit-Outs'],
      stat: '10+ Years',
      statLabel: 'Civil On-Site Track Record',
    },
    {
      num: '02',
      title: 'Vesta Future De Sports Infrastructure Pvt. Ltd.',
      subtitle: 'Turnkey Sports Facilities & Stadiums',
      desc: 'Specialized sports infrastructure provider delivering international-standard artificial football turfs, indoor badminton courts, athletic stadiums, and multi-sport complexes.',
      logo: '/logos/vesta-sports.svg',
      route: '/sports',
      accent: '#F5A623',
      tags: ['FIFA-Grade Turf', 'BWF Wooden Courts', 'Stadium EPC', 'Multi-Sport Arenas'],
      stat: '10+ Years',
      statLabel: 'Specialized Turf Experience',
    },
    {
      num: '03',
      title: 'The Seagull — Crab & Fish Hatchery',
      subtitle: 'Scientific Marine Aquaculture Systems',
      desc: 'Scientific marine hatchery and aquaculture operations focusing on high-survival crab and fish seed cultivation, bio-secure RAS water management, and sustainable coastal development.',
      logo: '/logos/the-seagull.svg',
      route: '/crabs-fish',
      accent: '#2AC6E2',
      tags: ['Crab Seed Hatchery', 'Scientific Aquaculture', 'RAS Filtration', 'Coastal Development'],
      stat: 'Marine Bio',
      statLabel: 'Scientific Quality Systems',
    },
  ];

  const VALUES = [
    {
      icon: ShieldCheck,
      title: 'Structural Integrity',
      desc: 'Uncompromising engineering discipline across civil builds, arena sub-bases, and biosecure marine facilities.',
    },
    {
      icon: TrendingUp,
      title: 'Turnkey Execution',
      desc: 'Single-window accountability from conceptual 3D blueprints to on-site handover and lifetime durability.',
    },
    {
      icon: Award,
      title: 'Certified Standards',
      desc: 'International-standard material compliance, FIFA/BWF turf specifications, and scientific aquaculture protocols.',
    },
    {
      icon: Briefcase,
      title: 'Unified Governance',
      desc: 'Transparent, forward-looking corporate leadership under Vesta Future Pvt. Ltd. (Incorporated Feb 2025).',
    },
  ];

  const HUBS = [
    {
      name: 'Kerala, India',
      role: 'Corporate Headquarters & Operations Core',
      desc: 'NH 66, Pulimootil Building, Cheppad P.O., Alappuzha',
      badge: 'HEADQUARTERS',
    },
    {
      name: 'Tamil Nadu',
      role: 'Sports Infrastructure & Civil Projects',
      desc: 'Turnkey sports turf construction & regional civil execution',
      badge: 'REGIONAL HUB',
    },
    {
      name: 'Puducherry',
      role: 'Coastal Aquaculture & Infrastructure',
      desc: 'Hatchery operations, coastal development & sports arenas',
      badge: 'REGIONAL HUB',
    },
    {
      name: 'Dubai, UAE',
      role: 'International Reach & Partnerships',
      desc: 'Cross-border partnerships, procurement & strategic ventures',
      badge: 'GLOBAL HUB',
    },
  ];

  return (
    <div className="about-page-root">
      {/* Dynamic Background Glows */}
      <div className="about-ambient-orb about-orb-1" />
      <div className="about-ambient-orb about-orb-2" />
      <div className="about-grid-overlay" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: 2-COLUMN LUXURY INTRO WITH LEADERSHIP IMAGE              */}
      {/* ========================================================================= */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Column: Focused Concise Content & Quick KPIs */}
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                A Decade of Building Foundations &amp;{' '}
                <span className="about-title-gradient">Scaling Future Verticals</span>
              </h1>

              <p className="about-hero-lead">
                Uniting precision civil engineering, international sports infrastructure, and scientific marine aquaculture under Vesta Future Pvt. Ltd.
              </p>

              {/* Quick KPI Strip */}
              <div className="about-hero-kpi-grid">
                <div className="about-kpi-card">
                  <span className="about-kpi-number" style={{ color: '#F5A623' }}>
                    <AnimatedCounter text="~10+ Yrs" />
                  </span>
                  <span className="about-kpi-text">Execution Legacy</span>
                </div>
                <div className="about-kpi-card">
                  <span className="about-kpi-number" style={{ color: '#2AC6E2' }}>
                    <AnimatedCounter text="3 Sectors" />
                  </span>
                  <span className="about-kpi-text">Operating Verticals</span>
                </div>
                <div className="about-kpi-card">
                  <span className="about-kpi-number" style={{ color: '#10B981' }}>
                    <AnimatedCounter text="Feb 2025" />
                  </span>
                  <span className="about-kpi-text">Pvt Ltd Structure</span>
                </div>
                <div className="about-kpi-card">
                  <span className="about-kpi-number" style={{ color: '#FFFFFF' }}>
                    <AnimatedCounter text="4 Hubs" />
                  </span>
                  <span className="about-kpi-text">Regional &amp; Global</span>
                </div>
              </div>

              <div className="about-hero-actions">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  Connect With Leadership
                </a>
                <a href="#ecosystem" className="btn btn-outline-gold">
                  <span>Explore 3 Operating Sectors</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Executive Corporate Leadership Image */}
            <div className="about-hero-media-wrap">
              <Image
                src="/images/about-leadership.jpg"
                alt="Corporate Leadership - Vesta Future Pvt. Ltd."
                fill
                priority
                sizes="(max-width: 991px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Gradient Shade for depth */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(7, 7, 9, 0.1) 0%, rgba(7, 7, 9, 0.3) 60%, rgba(7, 7, 9, 0.85) 100%)',
                }}
              />

              {/* Floating Bottom HUD Badge */}
              <div className="about-hero-media-badge">
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(245, 166, 35, 0.15)',
                    border: '1px solid rgba(245, 166, 35, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={20} color="var(--gold-primary)" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: 'var(--gold-primary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Enterprise Leadership &amp; Governance
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginTop: '2px',
                    }}
                  >
                    Vesta Future Pvt. Ltd. (Incorporated 2025)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 3-STAGE STRATEGIC EVOLUTION (SPACIOUS & ANIMATED)                  */}
      {/* ========================================================================= */}
      <section className="about-section-spacious">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Strategic Evolution</span>
            <h2 className="about-section-h2">The Vesta Trajectory</h2>
            <p className="about-section-sub">
              Three defined eras of disciplined growth, scaling from regional civil contracting into a
              diversified multi-disciplinary enterprise.
            </p>
          </div>

          <div className="about-milestones-grid">
            {MILESTONES.map((m, idx) => {
              const MilestoneIcon = m.icon;
              return (
                <div key={idx} className="about-milestone-card">
                  <div className="about-milestone-top">
                    <span className="about-milestone-year" style={{ color: m.accent }}>
                      <AnimatedCounter text={m.year} />
                    </span>
                    <span className="about-milestone-badge">{m.badge}</span>
                  </div>

                  <div
                    className="about-milestone-icon-wrap"
                    style={{
                      borderColor: `${m.accent}40`,
                      backgroundColor: `${m.accent}12`,
                    }}
                  >
                    <MilestoneIcon size={24} color={m.accent} />
                  </div>

                  <h3 className="about-milestone-title">{m.title}</h3>
                  <p className="about-milestone-lead">{m.lead}</p>
                  <p className="about-milestone-desc">{m.desc}</p>

                  <div className="about-milestone-line" style={{ backgroundColor: m.accent }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BUSINESS GROUP STRUCTURE (3 HIGH-END EXPANSIVE PILLARS)               */}
      {/* ========================================================================= */}
      <section id="ecosystem" className="about-section-spacious about-ecosystem-bg">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Operating Verticals</span>
            <h2 className="about-section-h2">Three Specialized Divisions</h2>
            <p className="about-section-sub">
              Each division operates with dedicated engineering focus, specialized technical teams,
              and unified quality standards.
            </p>
          </div>

          <div className="about-divisions-stack">
            {DIVISIONS.map((div) => (
              <div key={div.num} className="about-division-card">
                <div className="about-div-left">
                  <div className="about-div-logo-box">
                    <Image
                      src={div.logo}
                      alt={div.title}
                      fill
                      sizes="220px"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <h3 className="about-div-title">{div.title}</h3>
                  <p className="about-div-desc">{div.desc}</p>

                  {/* Capability Chips */}
                  <div className="about-div-tags">
                    {div.tags.map((tag) => (
                      <span key={tag} className="about-div-tag">
                        <CheckCircle2 size={13} color="var(--gold-primary)" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="about-div-actions">
                    <Link href={div.route} className="btn btn-primary">
                      <span>Explore Division</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="about-div-right">
                  <div className="about-div-stat-card">
                    <span className="about-div-stat-num" style={{ color: div.accent }}>
                      <AnimatedCounter text={div.stat} />
                    </span>
                    <span className="about-div-stat-lbl">{div.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORPORATE VALUES & GOVERNANCE PILLARS                                   */}
      {/* ========================================================================= */}
      <section className="about-section-spacious">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Enterprise Philosophy</span>
            <h2 className="about-section-h2">Built on Core Governance</h2>
            <p className="about-section-sub">
              Our growth is driven by structural safety, verified execution standards, and long-term
              client relationships.
            </p>
          </div>

          <div className="about-values-grid">
            {VALUES.map((v, idx) => {
              const VIcon = v.icon;
              return (
                <div key={idx} className="about-value-card">
                  <div className="about-value-icon">
                    <VIcon size={22} color="var(--gold-primary)" />
                  </div>
                  <h3 className="about-value-title">{v.title}</h3>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. REGIONAL HUBS & GLOBAL PRESENCE                                        */}
      {/* ========================================================================= */}
      <section className="about-section-spacious about-hubs-bg">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Strategic Footprint</span>
            <h2 className="about-section-h2">Our Presence</h2>
            <p className="about-section-sub">
              Headquartered in Kerala with active project execution across key regions in southern India
              and overseas.
            </p>
          </div>

          <div className="about-hubs-grid">
            {HUBS.map((hub, idx) => (
              <div key={idx} className="about-hub-card">
                <div className="about-hub-top">
                  <div className="about-hub-icon">
                    <MapPin size={22} color="var(--gold-primary)" />
                  </div>
                  <span className="about-hub-badge">{hub.badge}</span>
                </div>

                <h3 className="about-hub-name">{hub.name}</h3>
                <div className="about-hub-role">{hub.role}</div>
                <p className="about-hub-desc">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXECUTIVE CONTACT & INQUIRIES                                          */}
      {/* ========================================================================= */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-badge">
              <Sparkles size={14} />
              <span>DIRECT EXECUTIVE CHANNEL</span>
            </div>

            <h2 className="about-cta-title">Connect with Vesta Future Leadership</h2>
            <p className="about-cta-desc">
              Whether you are planning a civil development, developing a turnkey sports arena, or
              seeking commercial aquaculture partnerships — our corporate team is ready to assist.
            </p>

            <div className="about-cta-address">
              <strong>Corporate Headquarters:</strong> NH 66, Pulimootil Building, Cheppad P.O.,
              Alappuzha, Kerala, India.
            </div>

            <div className="about-cta-actions">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <WhatsAppIcon size={20} color="#FFFFFF" />
                Connect on WhatsApp
              </a>
              <a
                href="mailto:official.futureproperties@gmail.com"
                className="btn btn-outline-gold"
                style={{ padding: '16px 32px' }}
              >
                <span>Email Corporate Office</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
