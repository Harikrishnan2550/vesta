'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  fetchConstructionPricing,
  updateConstructionPricingApi,
  DEFAULT_CONSTRUCTION_PRICING,
} from '@/lib/api';
import {
  ShieldCheck,
  LogOut,
  Globe,
  DollarSign,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Save,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Tag,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export default function AdminPricingPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form states for the 3 packages
  const [budgetRate, setBudgetRate] = useState<string>(DEFAULT_CONSTRUCTION_PRICING.budgetRate);
  const [standardRate, setStandardRate] = useState<string>(DEFAULT_CONSTRUCTION_PRICING.standardRate);
  const [premiumRate, setPremiumRate] = useState<string>(DEFAULT_CONSTRUCTION_PRICING.premiumRate);
  const [unit, setUnit] = useState<string>(DEFAULT_CONSTRUCTION_PRICING.unit);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Auth Guard
  useEffect(() => {
    const storedToken = localStorage.getItem('vesta_admin_token');
    if (!storedToken) {
      router.push('/admin/login');
      return;
    }
    setToken(storedToken);

    const storedUser = localStorage.getItem('vesta_admin_user');
    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch (e) {}
    }

    loadPricing();
  }, [router]);

  const loadPricing = async () => {
    setLoading(true);
    try {
      const data = await fetchConstructionPricing();
      if (data) {
        setBudgetRate(data.budgetRate || DEFAULT_CONSTRUCTION_PRICING.budgetRate);
        setStandardRate(data.standardRate || DEFAULT_CONSTRUCTION_PRICING.standardRate);
        setPremiumRate(data.premiumRate || DEFAULT_CONSTRUCTION_PRICING.premiumRate);
        setUnit(data.unit || DEFAULT_CONSTRUCTION_PRICING.unit);
        if (data.updatedAt) {
          setLastUpdated(new Date(data.updatedAt).toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }));
        }
      }
    } catch (err: any) {
      console.error('Failed to load pricing:', err);
      setMessage({ type: 'error', text: 'Failed to fetch current pricing from database.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('vesta_admin_token');
    localStorage.removeItem('vesta_admin_user');
    router.push('/admin/login');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      router.push('/admin/login');
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const res = await updateConstructionPricingApi(
        {
          budgetRate: budgetRate.trim(),
          standardRate: standardRate.trim(),
          premiumRate: premiumRate.trim(),
          unit: unit.trim() || '/ SQFT',
        },
        token
      );

      if (res && res.data) {
        setBudgetRate(res.data.budgetRate);
        setStandardRate(res.data.standardRate);
        setPremiumRate(res.data.premiumRate);
        setUnit(res.data.unit);
        if (res.data.updatedAt) {
          setLastUpdated(new Date(res.data.updatedAt).toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }));
        }
      }

      setMessage({
        type: 'success',
        text: 'Construction package prices have been updated successfully and are now live on the website!',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: err.message || 'Failed to update package pricing.',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefaults = () => {
    if (confirm('Reset rates to original defaults (₹1,999 / ₹2,199 / ₹2,499)?')) {
      setBudgetRate(DEFAULT_CONSTRUCTION_PRICING.budgetRate);
      setStandardRate(DEFAULT_CONSTRUCTION_PRICING.standardRate);
      setPremiumRate(DEFAULT_CONSTRUCTION_PRICING.premiumRate);
      setUnit(DEFAULT_CONSTRUCTION_PRICING.unit);
    }
  };

  // Helper to adjust rate by step
  const adjustRate = (
    current: string,
    delta: number,
    setter: (val: string) => void
  ) => {
    const numericOnly = current.replace(/[^\d]/g, '');
    const currentNum = parseInt(numericOnly, 10) || 2000;
    const newNum = Math.max(100, currentNum + delta);
    setter(`₹${newNum.toLocaleString('en-IN')}`);
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* ========================================================================= */}
      {/* 1. TOP ADMIN HEADER WITH NAVIGATION TABS                                  */}
      {/* ========================================================================= */}
      <div
        style={{
          backgroundColor: '#121214',
          color: '#FFFFFF',
          padding: '24px 0 0 0',
          borderBottom: '1px solid rgba(245, 166, 35, 0.3)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            paddingBottom: '20px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--gold-primary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              <ShieldCheck size={16} />
              Vesta Future Group Dashboard
            </div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px' }}>
              Construction Pricing Management
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/construction#packages"
              target="_blank"
              className="btn btn-outline-light btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ExternalLink size={15} />
              <span>View Live Rates</span>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="btn btn-outline-light btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Globe size={15} />
              <span>Website</span>
            </Link>
            <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Admin Navigation Tab Bar */}
        <div className="container" style={{ display: 'flex', gap: '8px' }}>
          <Link
            href="/admin/gallery"
            style={{
              padding: '12px 20px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '3px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <ImageIcon size={16} />
            <span>Media &amp; Gallery</span>
          </Link>

          <Link
            href="/admin/pricing"
            style={{
              padding: '12px 20px',
              color: 'var(--gold-primary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '3px solid var(--gold-primary)',
              backgroundColor: 'rgba(245, 166, 35, 0.08)',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
            }}
          >
            <Tag size={16} />
            <span>Construction Pricing</span>
          </Link>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Alerts */}
        {message && (
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '10px',
              marginBottom: '28px',
              backgroundColor: message.type === 'success' ? '#D1E7DD' : '#F8D7DA',
              color: message.type === 'success' ? '#0F5132' : '#842029',
              border: `1px solid ${message.type === 'success' ? '#BADBCC' : '#F5C2C7'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            }}
          >
            {message.type === 'success' ? (
              <CheckCircle2 size={22} style={{ flexShrink: 0 }} />
            ) : (
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
            )}
            <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{message.text}</span>
          </div>
        )}

        {/* Intro Info Banner */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '24px 28px',
            borderRadius: '14px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--gold-primary)',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '4px',
              }}
            >
              <Sparkles size={14} />
              Real-Time Dynamic Pricing Engine
            </div>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '4px',
              }}
            >
              Residential Construction Packages Rates
            </h2>
            <p style={{ fontSize: '0.86rem', color: '#6B7280', margin: 0 }}>
              Update the square foot price for the 3 packages. All specifications, value propositions,
              and design stay consistent automatically.
            </p>
          </div>

          {lastUpdated && (
            <div
              style={{
                fontSize: '0.8rem',
                color: '#4B5563',
                backgroundColor: '#F3F4F6',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
              }}
            >
              <span style={{ fontWeight: 600 }}>Last Modified:</span> {lastUpdated}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 2. FORM & EDITING CARDS                                                   */}
        {/* ========================================================================= */}
        <form onSubmit={handleSave}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            {/* Card 1: Budget Package */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#4B5563',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Package 01
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Standard Specs</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: '#111827',
                    marginBottom: '6px',
                  }}
                >
                  Budget Package
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    marginBottom: '20px',
                  }}
                >
                  High-quality, cost-efficient residential construction tailored to budget homes.
                </p>

                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Rate per Unit ({unit})
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '2px solid #D1D5DB',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#F3F4F6',
                      color: '#4B5563',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      padding: '12px 16px',
                      borderRight: '1px solid #E5E7EB',
                    }}
                  >
                    ₹
                  </span>
                  <input
                    type="text"
                    value={budgetRate.replace(/^₹/, '')}
                    onChange={(e) => setBudgetRate(`₹${e.target.value.replace(/^₹/, '')}`)}
                    placeholder="1,999"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#111827',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font-display)',
                    }}
                  />
                </div>

                {/* Quick Step Adjusters */}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '12px',
                    alignItems: 'center',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => adjustRate(budgetRate, -50, setBudgetRate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: '#F9FAFB',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      cursor: 'pointer',
                    }}
                  >
                    - ₹50
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustRate(budgetRate, 50, setBudgetRate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: '#F9FAFB',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      cursor: 'pointer',
                    }}
                  >
                    + ₹50
                  </button>
                  <button
                    type="button"
                    onClick={() => setBudgetRate('₹1,999')}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.74rem',
                      color: '#6B7280',
                      cursor: 'pointer',
                      marginLeft: 'auto',
                    }}
                  >
                    Reset ₹1,999
                  </button>
                </div>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px dashed #E5E7EB',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Active on site</span>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {budgetRate}{' '}
                  <span style={{ fontSize: '0.74rem', color: '#6B7280' }}>{unit}</span>
                </span>
              </div>
            </div>

            {/* Card 2: Standard Package (Highlighted Most Popular) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid var(--gold-primary)',
                boxShadow: '0 10px 30px rgba(245, 166, 35, 0.15)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--gold-primary)',
                    color: '#070709',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 14px',
                    borderRadius: '20px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(245, 166, 35, 0.4)',
                  }}
                >
                  ⭐ Most Popular Package
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                    marginTop: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: 'var(--gold-primary)',
                      backgroundColor: 'rgba(245, 166, 35, 0.12)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Package 02
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Enhanced Specs</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: '#111827',
                    marginBottom: '6px',
                  }}
                >
                  Standard Package
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    marginBottom: '20px',
                  }}
                >
                  Enhanced specifications with branded electrical, plumbing, chimney, and hob.
                </p>

                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Rate per Unit ({unit})
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '2px solid var(--gold-primary)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 0 0 3px rgba(245, 166, 35, 0.15)',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(245, 166, 35, 0.15)',
                      color: '#B45309',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      padding: '12px 16px',
                      borderRight: '1px solid rgba(245, 166, 35, 0.3)',
                    }}
                  >
                    ₹
                  </span>
                  <input
                    type="text"
                    value={standardRate.replace(/^₹/, '')}
                    onChange={(e) => setStandardRate(`₹${e.target.value.replace(/^₹/, '')}`)}
                    placeholder="2,199"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#111827',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font-display)',
                    }}
                  />
                </div>

                {/* Quick Step Adjusters */}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '12px',
                    alignItems: 'center',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => adjustRate(standardRate, -50, setStandardRate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: '#F9FAFB',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      cursor: 'pointer',
                    }}
                  >
                    - ₹50
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustRate(standardRate, 50, setStandardRate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: '#F9FAFB',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      cursor: 'pointer',
                    }}
                  >
                    + ₹50
                  </button>
                  <button
                    type="button"
                    onClick={() => setStandardRate('₹2,199')}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.74rem',
                      color: '#6B7280',
                      cursor: 'pointer',
                      marginLeft: 'auto',
                    }}
                  >
                    Reset ₹2,199
                  </button>
                </div>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px dashed #E5E7EB',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Active on site</span>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {standardRate}{' '}
                  <span style={{ fontSize: '0.74rem', color: '#6B7280' }}>{unit}</span>
                </span>
              </div>
            </div>

            {/* Card 3: Premium Package */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#4B5563',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Package 03
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Luxury Specs</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: '#111827',
                    marginBottom: '6px',
                  }}
                >
                  Premium Package
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    marginBottom: '20px',
                  }}
                >
                  Luxury finishes, teak wood, modular kitchen, gypsum false ceilings, and CCTV points.
                </p>

                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Rate per Unit ({unit})
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '2px solid #D1D5DB',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#F3F4F6',
                      color: '#4B5563',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      padding: '12px 16px',
                      borderRight: '1px solid #E5E7EB',
                    }}
                  >
                    ₹
                  </span>
                  <input
                    type="text"
                    value={premiumRate.replace(/^₹/, '')}
                    onChange={(e) => setPremiumRate(`₹${e.target.value.replace(/^₹/, '')}`)}
                    placeholder="2,499"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#111827',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font-display)',
                    }}
                  />
                </div>

                {/* Quick Step Adjusters */}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '12px',
                    alignItems: 'center',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => adjustRate(premiumRate, -50, setPremiumRate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: '#F9FAFB',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      cursor: 'pointer',
                    }}
                  >
                    - ₹50
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustRate(premiumRate, 50, setPremiumRate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: '#F9FAFB',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      cursor: 'pointer',
                    }}
                  >
                    + ₹50
                  </button>
                  <button
                    type="button"
                    onClick={() => setPremiumRate('₹2,499')}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.74rem',
                      color: '#6B7280',
                      cursor: 'pointer',
                      marginLeft: 'auto',
                    }}
                  >
                    Reset ₹2,499
                  </button>
                </div>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px dashed #E5E7EB',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Active on site</span>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {premiumRate}{' '}
                  <span style={{ fontSize: '0.74rem', color: '#6B7280' }}>{unit}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Unit & Action Bar */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px 32px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <label
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#374151',
                  whiteSpace: 'nowrap',
                }}
              >
                Measurement Unit:
              </label>
              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="/ SQFT"
                style={{
                  padding: '8px 14px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#111827',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  width: '130px',
                }}
              />
              <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>
                (Default: / SQFT)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                type="button"
                onClick={handleResetToDefaults}
                className="btn btn-outline-light btn-sm"
                style={{
                  color: '#4B5563',
                  borderColor: '#D1D5DB',
                  backgroundColor: '#F9FAFB',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <RotateCcw size={15} />
                <span>Reset All to Defaults</span>
              </button>

              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  fontSize: '0.92rem',
                }}
              >
                <Save size={18} />
                <span>{saving ? 'Publishing Changes...' : 'Save & Publish Rates'}</span>
              </button>
            </div>
          </div>
        </form>

        {/* ========================================================================= */}
        {/* 3. LIVE WEBSITE PREVIEW (MATCHES THE SCREENSHOT EXACTLY)                   */}
        {/* ========================================================================= */}
        <div style={{ marginTop: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '18px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-primary)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <Layers size={14} />
                Live Customer View
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>
                Exact Website Preview
              </h3>
            </div>

            <Link
              href="/construction#packages"
              target="_blank"
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--gold-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>View On Live Website</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Dark Container rendering the exact preview cards */}
          <div
            style={{
              backgroundColor: '#070709',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 44px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 'clamp(20px, 3vw, 28px)',
                paddingTop: '20px',
              }}
            >
              {/* Preview 1: Budget Package */}
              <div
                style={{
                  backgroundColor: '#121216',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '18px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <h4
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '6px',
                    }}
                  >
                    Budget Package
                  </h4>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    High-quality, cost-efficient residential construction
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
                    <AnimatedCounter text={budgetRate} />
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {unit}
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  ✓ Rubble foundation • Load-bearing walls • Branded tiles &amp; cement
                </div>
              </div>

              {/* Preview 2: Standard Package (Most Popular) */}
              <div
                style={{
                  backgroundColor: '#16161F',
                  border: '2px solid var(--gold-primary)',
                  borderRadius: '18px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(245, 166, 35, 0.2)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--gold-primary)',
                    color: '#070709',
                    fontSize: '0.75rem',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    padding: '5px 18px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    boxShadow: '0 4px 16px rgba(245, 166, 35, 0.5)',
                    zIndex: 10,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '6px',
                    }}
                  >
                    Standard Package
                  </h4>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    Enhanced specifications with branded electrical &amp; plumbing
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
                    <AnimatedCounter text={standardRate} />
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {unit}
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  ✓ Column footing • V-Guard/Legrand • Modular chimney &amp; hob
                </div>
              </div>

              {/* Preview 3: Premium Package */}
              <div
                style={{
                  backgroundColor: '#121216',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '18px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <h4
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '6px',
                    }}
                  >
                    Premium Package
                  </h4>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    Luxury finishes, teak wood, modular kitchen &amp; false ceilings
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
                    <AnimatedCounter text={premiumRate} />
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {unit}
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  ✓ Teak wood • Gypsum ceilings • Jaquar/Kohler • CCTV Points
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
