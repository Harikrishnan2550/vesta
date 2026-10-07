'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Trophy,
  Fish,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp,
  Clock,
  Compass,
} from 'lucide-react';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

interface EraItem {
  id: string;
  year: string;
  badgeYear: string;
  title: string;
  subtitle: string;
  phase: string;
  statusBadge: string;
  icon: React.ElementType;
  iconColor: string;
  glowColor: string;
  lead: string;
  description: string;
  img: string;
  route: string;
  routeLabel: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
}

const ERAS: EraItem[] = [
  {
    id: '01',
    year: '2015',
    badgeYear: 'ESTD. 2015',
    title: 'Foundations in Civil & Architectural Builds',
    subtitle: 'Civil Contracting & Residential Development',
    phase: 'Genesis Phase',
    statusBadge: 'ESTABLISHED 2015',
    icon: Building2,
    iconColor: '#F5A623',
    glowColor: 'rgba(245, 166, 35, 0.4)',
    lead: 'Vesta Future began its journey with a strong foundation in residential construction, building development, and civil engineering contracts across Kerala.',
    description:
      'Over years of on-site discipline, the team focused on precision architectural plans, turnkey residential builds, and structural integrity, establishing a respected regional footprint.',
    img: '/images/hero/construction.jpg',
    route: '/construction',
    routeLabel: 'Explore Construction Division',
    tags: ['Civil Contracting', 'Turnkey Residential', 'Architectural Planning'],
    metrics: [
      { value: '2015', label: 'Genesis Year' },
      { value: '100%', label: 'Structural Compliance' },
      { value: 'Kerala', label: 'Regional Focus' },
    ],
    highlight: 'Ground-up civil engineering execution with unwavering structural standards.',
  },
  {
    id: '02',
    year: '2019',
    badgeYear: '2015 – 2022',
    title: 'A Decade of Precision Engineering & Delivery',
    subtitle: 'Proven Track Record & Client Trust',
    phase: 'Execution & Legacy',
    statusBadge: '10+ YRS PROVEN TRACK RECORD',
    icon: ShieldCheck,
    iconColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    lead: 'Over approximately a decade, Vesta Future expanded its execution capacity, delivering residential complexes, commercial developments, and civil structures.',
    description:
      'The company built enduring client trust through disciplined timelines, rigorous quality control, and hands-on structural engineering expertise across diverse project scales.',
    img: '/images/hero/corporate.jpg',
    route: '/about',
    routeLabel: 'Read Company Story',
    tags: ['10+ Years On-Site', 'Client Trust', 'Quality Assurance', 'Turnkey Delivery'],
    metrics: [
      { value: '10+ Yrs', label: 'Proven Execution' },
      { value: 'Turnkey', label: 'Delivery Model' },
      { value: 'Multi-Site', label: 'Regional Reach' },
    ],
    highlight: 'Building lasting trust through precision engineering and on-time completion.',
  },
  {
    id: '03',
    year: '2023',
    badgeYear: '2023 – 2024',
    title: 'Sports Infrastructure & Marine Aquaculture',
    subtitle: 'Strategic Multi-Sector Expansion',
    phase: 'Diversification Phase',
    statusBadge: '3 OPERATING VERTICALS',
    icon: Trophy,
    iconColor: '#2AC6E2',
    glowColor: 'rgba(42, 198, 226, 0.4)',
    lead: 'Diversified into specialized turnkey sports infrastructure alongside marine crab and fish hatchery operations under unified corporate vision.',
    description:
      'Built world-class sports arenas, FIFA/BWF standard artificial turfs, and court complexes, while scaling scientific marine hatchery systems under The Seagull brand.',
    img: '/images/hero/sports.jpg',
    route: '/sports',
    routeLabel: 'Explore Sports & Aquaculture',
    tags: ['Turnkey Sports Arenas', 'FIFA/BWF Standards', 'The Seagull Hatcheries', 'Marine Aquaculture'],
    metrics: [
      { value: '3 Sectors', label: 'Operating Verticals' },
      { value: 'Turnkey', label: 'Sports Arena EPC' },
      { value: 'Scientific', label: 'Hatchery Systems' },
    ],
    highlight: 'Transforming community recreation and coastal marine bio-farming.',
  },
  {
    id: '04',
    year: '2025',
    badgeYear: 'FEB 2025',
    title: 'Unified Corporate Leadership & Governance',
    subtitle: 'Vesta Future Pvt. Ltd. Incorporation',
    phase: 'Corporate Entity',
    statusBadge: 'INCORPORATED FEB 2025',
    icon: Sparkles,
    iconColor: '#F5A623',
    glowColor: 'rgba(245, 166, 35, 0.5)',
    lead: 'Transitioned into a formal Private Limited corporate structure in February 2025, marking another major milestone in its growth and long-term vision.',
    description:
      'Consolidated all 3 specialized operating sectors under unified corporate governance, positioning the group for regional and international enterprise growth.',
    img: '/images/hero/corporate.jpg',
    route: '/about',
    routeLabel: 'Explore Corporate Governance',
    tags: ['Vesta Future Pvt. Ltd.', 'Unified Enterprise', 'Corporate Governance', 'Long-term Vision'],
    metrics: [
      { value: 'Feb 2025', label: 'Pvt Ltd Structure' },
      { value: '3 Verticals', label: 'Unified Under Group' },
      { value: 'Enterprise', label: 'Governance Standard' },
    ],
    highlight: 'Formalized corporate structure powering the next generation of diversified growth.',
  },
];

export default function TrajectoryExperience() {
  const [activeIdx, setActiveIdx] = useState<number>(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-advance every 6.5 seconds when not interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ERAS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentEra = ERAS[activeIdx];
  const IconComponent = currentEra.icon;

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIdx((prev) => (prev - 1 + ERAS.length) % ERAS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIdx((prev) => (prev + 1) % ERAS.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIdx(idx);
  };

  return (
    <section className="nexus-trajectory-root">
      {/* Dynamic Background Glows */}
      <div className="nexus-glow-orb nexus-glow-1" />
      <div className="nexus-glow-orb nexus-glow-2" />
      <div className="nexus-grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ================================================================= */}
        {/* SECTION HEADER                                                    */}
        {/* ================================================================= */}
        <div className="nexus-header-row">
          <div>
            <div className="nexus-pill-badge">
              <span className="nexus-pulse-dot" />
              <span>STRATEGIC EVOLUTION • 2015 TO PRESENT</span>
            </div>

            <h2 className="nexus-section-title">
              From Construction Roots to a{' '}
              <span className="nexus-title-gradient">Diversified Business Group</span>
            </h2>

            <p className="nexus-section-desc">
              Over a decade of civil engineering execution, expanding into world-class sports infrastructure
              and scientific marine hatcheries under <strong style={{ color: '#FFFFFF' }}>Vesta Future Pvt. Ltd.</strong>
            </p>
          </div>

          {/* Group Overview Quick Stats Strip */}
          <div className="nexus-kpi-pill-group">
            <div className="nexus-kpi-pill">
              <span className="nexus-kpi-val" style={{ color: '#F5A623' }}>
                <AnimatedCounter text="~10+ Yrs" />
              </span>
              <span className="nexus-kpi-lbl">Proven Execution</span>
            </div>
            <div className="nexus-kpi-divider" />
            <div className="nexus-kpi-pill">
              <span className="nexus-kpi-val" style={{ color: '#2AC6E2' }}>
                <AnimatedCounter text="3 Sectors" />
              </span>
              <span className="nexus-kpi-lbl">Operating Verticals</span>
            </div>
            <div className="nexus-kpi-divider" />
            <div className="nexus-kpi-pill">
              <span className="nexus-kpi-val" style={{ color: '#10B981' }}>
                <AnimatedCounter text="Feb 2025" />
              </span>
              <span className="nexus-kpi-lbl">Pvt Ltd Structure</span>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* INTERACTIVE TIMELINE HIGHWAY TRACK                                */}
        {/* ================================================================= */}
        <div className="nexus-track-container">
          <div className="nexus-track-rail">
            {/* Animated glowing progress line */}
            <div
              className="nexus-track-progress"
              style={{ width: `${(activeIdx / (ERAS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="nexus-nodes-row">
            {ERAS.map((era, idx) => {
              const isActive = idx === activeIdx;
              const isPast = idx < activeIdx;
              const NodeIcon = era.icon;

              return (
                <button
                  key={era.id}
                  onClick={() => handleSelect(idx)}
                  className={`nexus-node-btn ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                >
                  <div className="nexus-node-circle">
                    <NodeIcon size={18} color={isActive ? '#F5A623' : isPast ? '#2AC6E2' : 'rgba(255,255,255,0.4)'} />
                    {isActive && <div className="nexus-node-glow" />}
                  </div>
                  <div className="nexus-node-info">
                    <span className="nexus-node-year">{era.badgeYear}</span>
                    <span className="nexus-node-phase">{era.phase}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* MAIN CINEMATIC BENTO SHOWCASE                                     */}
        {/* ================================================================= */}
        <div className="nexus-showcase-card">
          {/* Top Hologram Status Line */}
          <div className="nexus-card-topbar">
            <div className="nexus-topbar-left">
              <span className="nexus-topbar-status">{currentEra.statusBadge}</span>
            </div>

            <div className="nexus-topbar-controls">
              <button
                onClick={handlePrev}
                className="nexus-arrow-btn"
                aria-label="Previous milestone"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="nexus-step-counter">{activeIdx + 1} / {ERAS.length}</span>
              <button
                onClick={handleNext}
                className="nexus-arrow-btn"
                aria-label="Next milestone"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="nexus-card-body">
            {/* Left Column: Narrative & Action */}
            <div className="nexus-body-left">
              <div>
                <div className="nexus-era-category-row">
                  <div
                    className="nexus-era-icon-badge"
                    style={{
                      borderColor: `${currentEra.iconColor}40`,
                      backgroundColor: `${currentEra.iconColor}15`,
                    }}
                  >
                    <IconComponent size={20} color={currentEra.iconColor} />
                  </div>
                  <div>
                    <span className="nexus-era-phase-tag">{currentEra.phase}</span>
                    <h3 className="nexus-era-heading">{currentEra.title}</h3>
                  </div>
                </div>

                <p className="nexus-lead-text">{currentEra.lead}</p>
                <p className="nexus-sub-text">{currentEra.description}</p>

                {/* Highlight Quote Box */}
                <div className="nexus-highlight-box">
                  <Sparkles size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p>{currentEra.highlight}</p>
                </div>

                {/* Capability Chips */}
                <div className="nexus-tags-list">
                  {currentEra.tags.map((tag) => (
                    <span key={tag} className="nexus-tag-chip">
                      <CheckCircle2 size={12} color="var(--gold-primary)" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Era Metrics & CTA Row */}
              <div className="nexus-era-footer">
                <div className="nexus-era-metrics-grid">
                  {currentEra.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="nexus-era-metric-box">
                      <div className="nexus-era-metric-val">
                        <AnimatedCounter text={m.value} />
                      </div>
                      <div className="nexus-era-metric-lbl">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="nexus-era-actions">
                  <Link href={currentEra.route} className="btn btn-primary">
                    <span>{currentEra.routeLabel}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/about" className="btn btn-outline-gold">
                    <span>Full Company Story</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Photography & HUD Stamps */}
            <div className="nexus-body-right">
              <div className="nexus-media-wrapper">
                <Image
                  src={currentEra.img}
                  alt={currentEra.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="nexus-media-img"
                  priority
                />
                <div className="nexus-media-vignette" />

                {/* Floating HUD Tag: Top Right */}
                <div className="nexus-hud-badge-top">
                  <span className="nexus-hud-radar" />
                  <span>{currentEra.badgeYear}</span>
                </div>

                {/* Floating HUD Card: Bottom Overlay */}
                <div className="nexus-hud-card-bottom">
                  <div className="nexus-hud-title">{currentEra.subtitle}</div>
                  <div className="nexus-hud-subtitle">
                    <Compass size={13} color="var(--gold-primary)" />
                    <span>Vesta Future Pvt. Ltd. • Quality & Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BOTTOM 4-CARD QUICK SELECTION MATRIX                              */}
        {/* ================================================================= */}
        <div className="nexus-cards-grid">
          {ERAS.map((era, idx) => {
            const isActive = idx === activeIdx;
            const CardIcon = era.icon;

            return (
              <div
                key={era.id}
                onClick={() => handleSelect(idx)}
                className={`nexus-mini-card ${isActive ? 'is-active' : ''}`}
              >
                <div className="nexus-mini-card-header">
                  <span className="nexus-mini-year">{era.year}</span>
                  <div
                    className="nexus-mini-icon"
                    style={{
                      backgroundColor: isActive ? `${era.iconColor}25` : 'rgba(255,255,255,0.06)',
                      borderColor: isActive ? era.iconColor : 'rgba(255,255,255,0.12)',
                    }}
                  >
                    <CardIcon size={16} color={isActive ? era.iconColor : 'rgba(255,255,255,0.6)'} />
                  </div>
                </div>

                <div className="nexus-mini-title">{era.phase}</div>
                <div className="nexus-mini-desc">{era.subtitle}</div>

                <div className="nexus-mini-bar">
                  <div
                    className="nexus-mini-bar-fill"
                    style={{
                      width: isActive ? '100%' : '0%',
                      backgroundColor: era.iconColor,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
