'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Sliding active indicator state & refs
  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Construction', href: '/construction' },
    { label: 'Sports', href: '/sports' },
    { label: 'The Seagull', href: '/crabs-fish' },
    { label: 'Contact', href: '/contact' },
  ];

  // Update sliding pill indicator position
  const updateIndicator = (targetHref: string) => {
    const navEl = navRef.current;
    const targetEl = linkRefs.current[targetHref];

    if (navEl && targetEl) {
      const navRect = navEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const left = targetRect.left - navRect.left;
      const width = targetRect.width;

      setIndicatorStyle({
        left,
        width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    const activeHref = hoveredHref || pathname;
    updateIndicator(activeHref);
  }, [pathname, hoveredHref, isScrolled]);

  useEffect(() => {
    const handleResize = () => {
      updateIndicator(hoveredHref || pathname);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    const timeout = setTimeout(() => {
      updateIndicator(pathname);
    }, 150);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [pathname, hoveredHref]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: isScrolled ? '16px' : '24px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderBottom: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        padding: '0 28px',
        pointerEvents: 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* ========================================================================= */}
      {/* 1. SCROLLED STATE: SINGLE UNIFIED FLOATING WHITE CAPSULE BAR              */}
      {/* ========================================================================= */}
      {isScrolled ? (
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            height: '60px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 16px 45px rgba(0, 0, 0, 0.22), 0 0 20px rgba(245, 166, 35, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'auto',
            animation: 'textReveal 0.35s ease forwards',
          }}
        >
          {/* Logo on Left */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              paddingLeft: '4px',
            }}
          >
            <div style={{ width: '38px', height: '38px', position: 'relative', flexShrink: 0 }}>
              <Image
                src="/logos/vesta-group.png"
                alt="Vesta Future Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                color: '#111113',
                lineHeight: '1',
                textTransform: 'uppercase',
              }}
            >
              VESTA FUTURE
            </span>
          </Link>

          {/* Centered Pill Navigation */}
          <nav
            ref={navRef}
            onMouseLeave={() => setHoveredHref(null)}
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '40px',
              padding: '4px 6px',
              position: 'relative',
              gap: '2px',
            }}
          >
            {/* Sliding White Active Pill Indicator */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                bottom: '4px',
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                backgroundColor: '#FFFFFF',
                borderRadius: '30px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                opacity: indicatorStyle.opacity,
                transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {navLinks.map((link) => {
              const isActive = (hoveredHref || pathname) === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[link.href] = el;
                  }}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isActive ? '#070709' : 'rgba(0, 0, 0, 0.65)',
                    position: 'relative',
                    padding: '8px 18px',
                    borderRadius: '30px',
                    transition: 'color 0.25s ease',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    zIndex: 2,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Black CTA Button on Right */}
          <div className="desktop-actions" style={{ display: 'none', alignItems: 'center' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#121214',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '12px 24px',
                borderRadius: '40px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                e.currentTarget.style.color = '#070709';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#121214';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Get In Touch</span>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowRight size={12} />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={20} color="#121214" /> : <Menu size={20} color="#121214" />}
          </button>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. TOP STATE: 3 DETACHED FLOATING ISLAND CAPSULES                         */
        /* ========================================================================= */
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            pointerEvents: 'auto',
            animation: 'textReveal 0.35s ease forwards',
          }}
        >
          {/* Island 1: Left Logo Capsule (White Pill with Logo + Brand Name) */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#FFFFFF',
              borderRadius: '40px',
              padding: '8px 22px 8px 14px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
              textDecoration: 'none',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ width: '42px', height: '42px', position: 'relative', flexShrink: 0 }}>
              <Image
                src="/logos/vesta-group.png"
                alt="Vesta Future Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '0.92rem',
                letterSpacing: '0.06em',
                color: '#111113',
                lineHeight: '1',
                textTransform: 'uppercase',
              }}
            >
              VESTA FUTURE
            </span>
          </Link>

          {/* Island 2: Center Navigation Frosted Capsule with Active White Pill Indicator */}
          <nav
            ref={navRef}
            onMouseLeave={() => setHoveredHref(null)}
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.45)',
              borderRadius: '40px',
              padding: '6px 8px',
              position: 'relative',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)',
              gap: '2px',
            }}
          >
            {/* Sliding White Active Pill Indicator */}
            <div
              style={{
                position: 'absolute',
                top: '6px',
                bottom: '6px',
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                backgroundColor: '#FFFFFF',
                borderRadius: '30px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                opacity: indicatorStyle.opacity,
                transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {navLinks.map((link) => {
              const isActive = (hoveredHref || pathname) === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[link.href] = el;
                  }}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isActive ? '#070709' : '#FFFFFF',
                    position: 'relative',
                    padding: '8px 18px',
                    borderRadius: '30px',
                    transition: 'color 0.25s ease',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    zIndex: 2,
                    textShadow: isActive ? 'none' : '0 1px 3px rgba(0,0,0,0.5)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Island 3: Right Dark CTA Capsule Button */}
          <div className="desktop-actions" style={{ display: 'none', alignItems: 'center' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#121214',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '12px 24px',
                borderRadius: '40px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                e.currentTarget.style.color = '#070709';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#121214';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              <span>Get In Touch</span>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowRight size={12} />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={20} color="#121214" /> : <Menu size={20} color="#121214" />}
          </button>
        </div>
      )}

      {/* Mobile Menu Dropdown Card */}
      {isMobileMenuOpen && (
        <div
          className="mobile-drawer-anim"
          style={{
            position: 'absolute',
            top: 'calc(100% + 14px)',
            left: '28px',
            right: '28px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(245, 166, 35, 0.4)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
            pointerEvents: 'auto',
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 800 : 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: isActive ? 'var(--gold-primary)' : '#121214',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(245, 166, 35, 0.08)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#121214',
              color: '#FFFFFF',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '14px',
              borderRadius: '40px',
              textDecoration: 'none',
            }}
          >
            <span>Get In Touch</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* Embedded Styles */}
      <style jsx global>{`
        .mobile-drawer-anim {
          animation: drawerSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes drawerSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <style jsx>{`
        @media (min-width: 980px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
