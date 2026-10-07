'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { GalleryItem, GalleryCategory } from '@/types';
import { fetchGalleryItems, formatImageUrl } from '@/lib/api';
import { X, ZoomIn, Eye, Layers, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface DynamicGalleryProps {
  initialCategory?: 'all' | GalleryCategory;
  showFilters?: boolean;
  limit?: number;
  featuredOnly?: boolean;
}

export const DynamicGallery: React.FC<DynamicGalleryProps> = ({
  initialCategory = 'all',
  showFilters = true,
  limit,
  featuredOnly = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchGalleryItems(
      selectedCategory === 'all' ? undefined : selectedCategory,
      featuredOnly ? true : undefined
    )
      .then((data) => {
        if (isMounted) {
          const displayItems = limit ? data.slice(0, limit) : data;
          setItems(displayItems);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Gallery loading error:', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, featuredOnly, limit]);

  const activeItem = activeLightboxIndex !== null && items[activeLightboxIndex] ? items[activeLightboxIndex] : null;

  // Keyboard navigation and ESC to close
  const handleClose = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : items.length - 1;
    });
  }, [items.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (activeLightboxIndex === null) return;

    // Lock body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, handleClose, handlePrev, handleNext]);

  const categories = [
    { label: 'All Portfolio', value: 'all' },
    { label: 'Builders & Developers', value: 'construction' },
    { label: 'The Seagull Crabs & Fish', value: 'crabs-fish' },
    { label: 'Sports Infrastructure', value: 'sports' },
  ];

  const getCategoryBadgeLabel = (cat: string) => {
    switch (cat) {
      case 'construction':
        return 'Builders & Developers';
      case 'crabs-fish':
        return 'Crabs & Fish Farm';
      case 'sports':
        return 'Sports Infrastructure';
      default:
        return cat;
    }
  };

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  padding: '12px 26px',
                  borderRadius: '30px',
                  border: isActive
                    ? '1px solid var(--gold-primary)'
                    : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: isActive
                    ? 'var(--gold-primary)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#0A0A0C' : 'rgba(255, 255, 255, 0.85)',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 25px rgba(245, 166, 35, 0.4)' : 'none',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      {loading ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                height: '320px',
                backgroundColor: '#16161A',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                animation: 'pulseGlow 2s infinite',
              }}
            />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 20px',
            backgroundColor: '#121216',
            borderRadius: '16px',
            border: '1px dashed rgba(245, 166, 35, 0.3)',
          }}
        >
          <Layers size={44} color="var(--gold-primary)" style={{ margin: '0 auto 16px auto' }} />
          <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#FFFFFF' }}>
            No Media Found
          </h4>
          <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9rem' }}>
            There are currently no uploaded portfolio images under this category.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {items.map((item, idx) => (
            <div
              key={item._id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="card-luxury"
              style={{
                cursor: 'pointer',
                position: 'relative',
                height: '340px',
                overflow: 'hidden',
                backgroundColor: '#121216',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Image
                src={formatImageUrl(item.imageUrl)}
                alt={item.altText || item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="gallery-item-img"
              />

              {/* Gradient Shade */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(10, 10, 12, 0.95) 0%, rgba(10, 10, 12, 0.4) 50%, transparent 100%)',
                }}
              />

              {/* Top Category Badge */}
              <div style={{ position: 'absolute', top: '18px', left: '18px' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(10, 10, 12, 0.85)',
                    border: '1px solid rgba(245, 166, 35, 0.4)',
                    color: 'var(--gold-primary)',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '5px 12px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {getCategoryBadgeLabel(item.category)}
                </span>
              </div>

              {/* Bottom Meta */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  color: '#FFFFFF',
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    lineHeight: '1.3',
                    marginBottom: '6px',
                    color: '#FFFFFF',
                  }}
                >
                  {item.title}
                </h4>
                {item.description && (
                  <p
                    style={{
                      fontSize: '0.825rem',
                      color: 'rgba(255, 255, 255, 0.72)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              {/* Hover Zoom Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(245, 166, 35, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0A0A0C',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                }}
              >
                <ZoomIn size={18} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Portal (Rendered directly at document.body with max z-index) */}
      {mounted && activeItem && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999999, // Above navbar and all layers
            backgroundColor: 'rgba(5, 5, 8, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 16px',
            animation: 'fadeIn 0.25s ease forwards',
            overflowY: 'auto',
          }}
          onClick={handleClose}
        >
          {/* Top Control Bar with Clear Close Button & Index Counter */}
          <div
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              right: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10000000,
              pointerEvents: 'none',
            }}
          >
            {/* Image Counter Badge */}
            <div
              style={{
                pointerEvents: 'auto',
                backgroundColor: 'rgba(18, 18, 22, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                padding: '6px 16px',
                borderRadius: '30px',
                color: '#FFFFFF',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              {(activeLightboxIndex ?? 0) + 1} / {items.length}
            </div>

            {/* High-Visibility Floating Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close Lightbox"
              style={{
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                borderRadius: '30px',
                padding: '8px 18px 8px 14px',
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                e.currentTarget.style.color = '#0E0E12';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={18} strokeWidth={2.5} />
              <span>Close</span>
              <span
                style={{
                  fontSize: '0.68rem',
                  opacity: 0.65,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                }}
              >
                ESC
              </span>
            </button>
          </div>

          {/* Previous & Next Navigation Buttons */}
          {items.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous Image"
                style={{
                  position: 'fixed',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10000000,
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(18, 18, 22, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                  e.currentTarget.style.color = '#0E0E12';
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(18, 18, 22, 0.85)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Image"
                style={{
                  position: 'fixed',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10000000,
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(18, 18, 22, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                  e.currentTarget.style.color = '#0E0E12';
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(18, 18, 22, 0.85)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </>
          )}

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#121216',
              border: '1px solid rgba(245, 166, 35, 0.4)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 28px 90px rgba(0, 0, 0, 0.95), 0 0 50px rgba(245, 166, 35, 0.18)',
              marginTop: '40px',
              marginBottom: '20px',
            }}
          >
            {/* Image Preview Area with Proper Max Aspect Ratio */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'min(55vh, 520px)',
                minHeight: '260px',
                backgroundColor: '#070709',
              }}
            >
              <Image
                src={formatImageUrl(activeItem.imageUrl)}
                alt={activeItem.altText || activeItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                style={{ objectFit: 'contain', padding: '8px' }}
                priority
              />
            </div>

            {/* Details Footer */}
            <div
              style={{
                padding: '22px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                backgroundColor: '#0E0E12',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ maxWidth: '780px' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(245, 166, 35, 0.12)',
                    border: '1px solid rgba(245, 166, 35, 0.4)',
                    color: 'var(--gold-primary)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'inline-block',
                    marginBottom: '6px',
                  }}
                >
                  {getCategoryBadgeLabel(activeItem.category)}
                </span>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginTop: '2px',
                    lineHeight: 1.3,
                  }}
                >
                  {activeItem.title}
                </h3>
                {activeItem.description && (
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginTop: '6px',
                      lineHeight: '1.55',
                    }}
                  >
                    {activeItem.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
