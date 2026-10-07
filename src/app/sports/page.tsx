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
    { title: 'Multi-sport Turfs', desc: 'All-weather synthetic grass turf systems engineered with high-resilience monofilament yarn and rapid subsurface drainage.', icon: Trophy },
    { title: 'Indoor Badminton Courts', desc: 'BWF-standard sprung hardwood timber (maple/teak) flooring and multi-layer cushioned PVC synthetic sports vinyl.', icon: Activity },
    { title: 'Volleyball Courts', desc: 'Outdoor and indoor volleyball surfaces engineered with seamless polyurethane or cushioned acrylic systems.', icon: CircleDot },
    { title: 'Multi-purpose Synthetic Sports Grounds', desc: 'Versatile synthetic arenas designed for multi-sport versatility—futsal, basketball, volleyball, and tennis on a single surface.', icon: Layers },
    { title: 'Indoor Stadiums', desc: 'Turnkey indoor sports arena construction including structural steel roofing, anti-glare high-mast sports LED lighting, and seating.', icon: Building2 },
    { title: 'Indoor Swimming Pools', desc: 'Aquatic complexes featuring temperature-controlled circulation, anti-microbial tiling, underwater lighting, and drainage.', icon: Flame },
    { title: 'Gyms & Fitness Facilities', desc: 'Custom gym architecture, heavy-duty acoustic rubber flooring, cross-functional training zones, and fitness amenities.', icon: Award },
    { title: 'Synthetic Sports Surfaces', desc: 'Cushioned acrylic sports flooring, EPDM rubber safety surfacing, and polyurethane running tracks resistant to UV weathering.', icon: Sparkles },
  ];

  // 6 Confirmed Segments
  const ourSegments = [
    {
      num: '01',
      title: 'Football Turf Installation',
      desc: 'All-weather 5s, 7s, and 11s artificial grass football turfs with resilient infill and laser-graded drainage.',
    },
    {
      num: '02',
      title: 'Cricket Turf & Synthetic Cricket Pitches',
      desc: 'High-density synthetic cricket pitches, practice nets, and full cricket turf boxes with natural ball bounce.',
    },
    {
      num: '03',
      title: 'Indoor Badminton Court Construction',
      desc: 'BWF-standard sprung wooden (maple/teak) or synthetic PVC cushioned badminton court installations.',
    },
    {
      num: '04',
      title: 'Indoor Volleyball, Basketball & Multi-Sport Fields',
      desc: 'Multi-sport indoor & outdoor acrylic/polyurethane arenas engineered for high athletic grip and safety.',
    },
    {
      num: '05',
      title: 'Indoor Swimming Pools',
      desc: 'Modern aquatic complexes with automated filtration, temperature control, and anti-slip deck surrounds.',
    },
    {
      num: '06',
      title: 'Skating Ground & College Sports Ground Setup',
      desc: 'Smooth acrylic roller skating rinks and full-scale campus sports complex civil development.',
    },
  ];

  // 6 Key Features
  const keyFeatures = [
    {
      icon: Globe2,
      title: '10+ Years Experience',
      desc: '10+ years of turf construction experience across India and international projects.',
    },
    {
      icon: Compass,
      title: 'Challenging Installations',
      desc: 'Expertise in challenging installations, including indoor sports turf and outdoor gym areas.',
    },
    {
      icon: Hammer,
      title: 'Precision-Engineered Base Work',
      desc: 'Precision-engineered base work for uniform surface levels, consistent performance, and natural ball bounce.',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Warranty',
      desc: 'Safe, durable, and low-maintenance systems backed by a comprehensive 10-year warranty.',
    },
    {
      icon: GraduationCap,
      title: 'Proven Multi-Sector Execution',
      desc: 'Successfully executed projects for schools, colleges, residential developments, sports academies, and other sports facilities.',
    },
    {
      icon: Award,
      title: 'Quality-Focused Execution',
      desc: 'Quality-focused execution with attention to performance, safety, durability, and long-term value.',
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
                  style={{ padding: '14px 28px' }}
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  Inquire on WhatsApp
                </a>
                <a
                  href="#segments"
                  className="btn btn-outline-gold"
                  style={{ padding: '14px 28px' }}
                >
                  View Our Segments
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'center',
            }}
          >
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="End-to-End Turnkey Sports Solutions"
                subtitle="From concept and civil engineering to precision surface installation and handover."
              />

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.75',
                  marginBottom: '18px',
                }}
              >
                <strong>Vesta Future De Sports Infrastructure Pvt. Ltd.</strong> is a professionally
                driven sports infrastructure company providing comprehensive, end-to-end solutions
                for modern sports facilities.
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: '1.75',
                  marginBottom: '20px',
                }}
              >
                The company specializes in design, construction, development, installation, surface
                installation, finishing, and project handover. Our turnkey solutions cover every
                stage of the project lifecycle.
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: '1.75',
                  marginBottom: '28px',
                }}
              >
                We are committed to delivering high-quality, durable, safe, and performance-oriented
                sports facilities designed to provide long-term value and an exceptional user
                experience.
              </p>
            </div>

            {/* Turnkey Flow Diagram */}
            <div
              style={{
                backgroundColor: '#16161D',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: 'clamp(24px, 4vw, 36px) clamp(18px, 3vw, 28px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <ShieldCheck color="var(--gold-primary)" size={24} />
                Turnkey Project Lifecycle
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Planning & Topographical Survey',
                  'Architectural & Engineering Design',
                  'Civil Sub-Base & Drainage Construction',
                  'Certified Surface & Turf Installation',
                  'Arena Lighting & Equipment Finishing',
                  'Final Quality Inspection & Handover',
                ].map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--gold-primary)',
                        backgroundColor: 'rgba(245, 166, 35, 0.12)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                      {step}
                    </span>
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
            }}
          >
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="card-luxury"
                  style={{
                    backgroundColor: '#121216',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: 'clamp(24px, 3vw, 32px) clamp(18px, 2.5vw, 26px)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 166, 35, 0.12)',
                      border: '1px solid rgba(245, 166, 35, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComp size={26} color="var(--gold-primary)" />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '12px',
                    }}
                  >
                    {feat.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255, 255, 255, 0.72)',
                      lineHeight: '1.65',
                      margin: 0,
                    }}
                  >
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
            }}
          >
            {ourSegments.map((seg) => (
              <div
                key={seg.num}
                className="card-luxury"
                style={{
                  backgroundColor: '#16161D',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: 'clamp(24px, 3vw, 32px) clamp(18px, 2.5vw, 26px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(245, 166, 35, 0.15)',
                    position: 'absolute',
                    top: '12px',
                    right: '18px',
                    lineHeight: '1',
                  }}
                >
                  {seg.num}
                </div>

                <span
                  style={{
                    backgroundColor: 'var(--gold-primary)',
                    color: '#000000',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '18px',
                  }}
                >
                  SEGMENT {seg.num}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}
                >
                  {seg.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255, 255, 255, 0.72)',
                    lineHeight: '1.65',
                    margin: 0,
                  }}
                >
                  {seg.desc}
                </p>
              </div>
            ))}
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            {facilities.map((fac, idx) => {
              const FacIcon = fac.icon;
              return (
                <div
                  key={idx}
                  className="card-luxury"
                  style={{
                    backgroundColor: '#121216',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: 'clamp(20px, 2.5vw, 28px) clamp(16px, 2vw, 24px)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(245, 166, 35, 0.1)',
                      border: '1px solid rgba(245, 166, 35, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}
                  >
                    <FacIcon size={24} color="var(--gold-primary)" />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '10px',
                    }}
                  >
                    {fac.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.72)',
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    {fac.desc}
                  </p>
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
                  <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    official.futureproperties@gmail.com
                  </span>
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
                style={{ width: '100%', justifyContent: 'center', padding: '14px 20px' }}
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
