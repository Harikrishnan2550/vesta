'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DynamicGallery } from '@/components/gallery/DynamicGallery';
import {
  Building2,
  HardHat,
  Compass,
  CheckCircle2,
  Layers,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
  Eye,
  FileText,
  CreditCard,
  PenTool,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export default function ConstructionPage() {
  const division = siteConfig.divisions.construction;
  const waUrl = getWhatsAppLink(division.whatsappMessage);

  // 7 Confirmed Services
  const services = [
    {
      title: 'Residential Construction',
      desc: 'Full-scope residential villa and home construction with superior structural engineering and premium finishing.',
      icon: Building2,
    },
    {
      title: '2D/3D Plans & Elevations',
      desc: 'Architectural floor plans, structural layouts, 3D exterior elevations, and photorealistic design visualizations.',
      icon: PenTool,
    },
    {
      title: 'Renovations',
      desc: 'Structural remodeling, extension wings, modernization, and aesthetic revamps for existing residential properties.',
      icon: HardHat,
    },
    {
      title: 'Interior Design',
      desc: 'Custom modular kitchens, bedroom wardrobes, gypsum false ceiling designs, and bespoke wooden cabinetry.',
      icon: Sparkles,
    },
    {
      title: 'Landscaping',
      desc: 'Custom paving, green turfing, exterior compound architecture, drainage pathways, and garden designs.',
      icon: Compass,
    },
    {
      title: 'Budget Homes',
      desc: 'Cost-engineered, durable, and space-efficient home construction tailored to exact client budgets.',
      icon: Layers,
    },
    {
      title: 'Real Estate',
      desc: 'Property development, land evaluation, and strategic residential building solutions in Kerala.',
      icon: Building2,
    },
  ];

  // 4 Construction Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Project Analysis',
      desc: "A free project analysis is conducted to understand the client's requirements and discuss the design.",
    },
    {
      step: '02',
      title: 'Estimated Cost',
      desc: 'An estimated construction cost range is provided based on the initial project scope and requirements.',
    },
    {
      step: '03',
      title: 'Design & Finalization',
      desc: 'After approval, the design agreement is signed and the design, floor plans, and material selections are finalized.',
    },
    {
      step: '04',
      title: 'Guaranteed Quotation',
      desc: 'After finalization, the client receives a guaranteed cost quotation before construction commencement.',
    },
  ];

  // 3 Construction Packages
  const packages = [
    {
      id: 'budget',
      name: 'Budget Package',
      rate: '₹1,900',
      unit: '/ SQFT',
      tagline: 'High-quality, cost-efficient residential construction',
      featured: false,
      specs: [
        'Rubble foundation',
        'Load-bearing walls',
        'Columns and beams where necessary',
        'Mahagony or equivalent wood',
        'Solid cement blocks',
        'IS-certified electrical materials',
        'IS-certified plumbing materials',
        'IS-certified bathroom fittings',
        'P-sand cement plastering',
        'Primer and emulsion painting',
        'IS-certified branded tiles',
        'Certified branded cement',
        'IS-certified steel',
        'MS tube staircase handrail',
      ],
    },
    {
      id: 'standard',
      name: 'Standard Package',
      rate: '₹2,100',
      unit: '/ SQFT',
      tagline: 'Enhanced specifications with branded electrical & plumbing',
      featured: true,
      specs: [
        'RCC pedestal column footing / rubble foundation',
        'Load-bearing structure',
        'Anjili / Jack wood',
        'Solid cement blocks',
        'V-Guard / Legrand electrical materials',
        'Ashirvad / Star plumbing',
        'Cera / Hindware bathroom fittings',
        'Asian / Berger paints',
        'Kitchen chimney and hob',
        'Bedroom wardrobes',
        'SS 304 staircase handrail',
        'Exterior works',
        'RAK / Kajaria / Somany tiles',
        'Hot water connection',
        'TV unit',
      ],
    },
    {
      id: 'premium',
      name: 'Premium Package',
      rate: '₹2,400',
      unit: '/ SQFT',
      tagline: 'Luxury finishes, teak wood, modular kitchen & false ceilings',
      featured: false,
      specs: [
        'RCC pedestal column footing',
        'Load-bearing structure',
        'Teak wood front doors and windows',
        'Jack wood internal frames and shutters',
        'V-Guard / Polycab / premium Legrand electrical materials',
        'Supreme / Finolex plumbing',
        'Jaquar / Kohler bathroom fittings',
        'Asian / Berger painting',
        'Modular kitchen',
        'Bedroom wardrobes and bed headboards',
        'BLDC fans and LED lights',
        'Gypsum false ceiling',
        'Premium RAK / Kajaria / Somany tiles',
        'UltraTech cement & Tata Steel / Vizag steel',
        'CCTV points and pre-designed TV unit',
        'Glass and wooden staircase handrail',
      ],
    },
  ];

  // 11 Value Propositions
  const valueProps = [
    { title: 'Best Design', desc: 'Creative and functional solutions tailored to client requirements.' },
    { title: 'Best Pricing', desc: 'Transparent, competitive and value-driven pricing structures.' },
    { title: 'Skilled Labour', desc: 'Experienced professionals dedicated to quality execution.' },
    { title: 'Commitment to Quality', desc: 'Superior materials and rigorous workmanship standards.' },
    { title: '12-Year Workmanship Guarantee', desc: 'Long-term workmanship assurance on executed structures.' },
    { title: 'Anti-Termite Treatment', desc: 'Comprehensive 12-year warranty protection against termite damage.' },
    { title: 'Damp Proofing / DPC', desc: 'Protection against capillary action for concrete and foundations.' },
    { title: 'CCTV Monitoring', desc: '02 Wi-Fi-enabled CCTV cameras for live construction updates for clients.' },
    { title: 'Transparent Payments', desc: 'A clear, milestone-based 10-stage payment structure.' },
    { title: 'Comprehensive Drawings', desc: '2D and 3D elevations and complete drawings including plumbing and electrical.' },
    { title: 'Government Approvals', desc: 'Professional assistance with obtaining statutory building permissions.' },
  ];

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
              gap: 'clamp(28px, 4vw, 56px)',
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
                  Original Core Business
                </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                  A Vesta Future Concern
                </span>
              </div>

              <h1
                className="heading-display"
                style={{
                  fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
                  color: '#FFFFFF',
                  lineHeight: '1.12',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                Vesta Future Builders &amp; Developers
              </h1>

              <p
                className="text-lead"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.08rem)',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                }}
              >
                {division.description}
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
                  href="#packages"
                  className="btn btn-outline-gold"
                  style={{ padding: '14px 28px' }}
                >
                  View Construction Packages
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
                src="/images/hero/construction.jpg"
                alt="Vesta Future Builders & Developers"
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
                  alt={division.name}
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
      {/* 2. SERVICES SECTION (7 CONFIRMED SERVICES)                                 */}
      {/* ========================================================================= */}
      <section id="services" className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Specialized Capabilities"
            title="Our Construction &amp; Development Services"
            subtitle="Professional building and architectural services delivered with engineering rigor:"
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(16px, 2.5vw, 24px)',
            }}
          >
            {services.map((srv, idx) => {
              const SrvIcon = srv.icon;
              return (
                <div
                  key={idx}
                  className="card-luxury"
                  style={{
                    backgroundColor: '#121216',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 166, 35, 0.12)',
                      border: '1px solid rgba(245, 166, 35, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}
                  >
                    <SrvIcon size={24} color="var(--gold-primary)" />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '10px',
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'rgba(255, 255, 255, 0.72)',
                      lineHeight: '1.65',
                      margin: 0,
                    }}
                  >
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STRUCTURED 4-STEP CONSTRUCTION PROCESS                                 */}
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
            eyebrow="Structured Process"
            title="Our 4-Stage Construction Workflow"
            subtitle="A transparent, step-by-step methodology ensuring cost certainty and design perfection."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: 'clamp(16px, 2.5vw, 24px)',
            }}
          >
            {processSteps.map((st) => (
              <div
                key={st.step}
                style={{
                  backgroundColor: '#16161D',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '32px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.2rem',
                    fontWeight: 900,
                    color: 'rgba(245, 166, 35, 0.15)',
                    position: 'absolute',
                    top: '10px',
                    right: '16px',
                    lineHeight: '1',
                  }}
                >
                  {st.step}
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
                  STEP {st.step}
                </span>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}
                >
                  {st.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'rgba(255, 255, 255, 0.72)',
                    lineHeight: '1.65',
                    margin: 0,
                  }}
                >
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RESIDENTIAL CONSTRUCTION PACKAGES (BUDGET, STANDARD, PREMIUM)          */}
      {/* ========================================================================= */}
      <section id="packages" className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Residential Construction Packages"
            title="Transparent Construction Package Comparison"
            subtitle="Tailored residential building segments engineered to deliver superior materials, execution, and long-term durability."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(20px, 3vw, 28px)',
              marginBottom: '32px',
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="card-luxury"
                style={{
                  backgroundColor: pkg.featured ? '#16161F' : '#121216',
                  border: pkg.featured
                    ? '2px solid var(--gold-primary)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '18px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {pkg.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--gold-primary)',
                      color: '#000000',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      padding: '4px 14px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '6px',
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    {pkg.tagline}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '6px',
                    marginBottom: '24px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.4rem',
                      fontWeight: 800,
                      color: 'var(--gold-primary)',
                    }}
                  >
                    <AnimatedCounter text={pkg.rate} />
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {pkg.unit}
                  </span>
                </div>

                {/* Specifications List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '32px',
                    flexGrow: 1,
                  }}
                >
                  {pkg.specs.map((sp, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.84rem',
                        color: 'rgba(255, 255, 255, 0.85)',
                      }}
                    >
                      <Check
                        size={16}
                        color="var(--gold-primary)"
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={getWhatsAppLink(
                    `Hello, I would like to inquire about Vesta Future's ${pkg.name} (${pkg.rate}/SQFT).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pkg.featured ? 'btn btn-gold' : 'btn btn-outline-gold'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <WhatsAppIcon size={16} color="currentColor" />
                  Inquire for {pkg.name}
                </a>
              </div>
            ))}
          </div>

          {/* Package Disclaimer */}
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.82rem',
              color: 'rgba(255, 255, 255, 0.55)',
              fontStyle: 'italic',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            * Package specifications and pricing are subject to confirmation and may vary based on
            project requirements and current material costs.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 11 VALUE PROPOSITIONS                                                  */}
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
            eyebrow="The Vesta Future Standard"
            title="Company Value Propositions &amp; Guarantees"
            subtitle="Proven building advantages and structural assurances delivered on every residential project:"
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {valueProps.map((vp, vIdx) => (
              <div
                key={vIdx}
                className="card-luxury"
                style={{
                  backgroundColor: '#16161D',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '24px 22px',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <CheckCircle2
                  size={20}
                  color="var(--gold-primary)"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '4px',
                    }}
                  >
                    {vp.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      margin: 0,
                      lineHeight: '1.5',
                    }}
                  >
                    {vp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DYNAMIC GALLERY                                                        */}
      {/* ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#070709' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Project Visuals"
            title="Construction &amp; Building Gallery"
            subtitle="Showcasing completed residential projects, architectural elevations, and structural developments."
            align="center"
          />

          <DynamicGallery initialCategory="construction" showFilters={false} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT / CONSULTATION BANNER                                          */}
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
            VESTA FUTURE BUILDERS &amp; DEVELOPERS
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '16px' }}>
            Ready to Build Your Dream Home in Kerala?
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
            Connect directly with our construction engineers on WhatsApp for a free project analysis
            and custom cost estimate.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '14px 32px' }}
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            Inquire for Project Analysis
          </a>
        </div>
      </section>
    </div>
  );
}
