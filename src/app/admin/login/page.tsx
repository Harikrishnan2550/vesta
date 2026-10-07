'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { loginAdmin } from '@/lib/api';
import { Lock, Mail, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@vestafuture.com');
  const [password, setPassword] = useState('VestaAdmin@2026!');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await loginAdmin(email, password);
      if (res.token) {
        localStorage.setItem('vesta_admin_token', res.token);
        if (res.admin) {
          localStorage.setItem('vesta_admin_user', JSON.stringify(res.admin));
        }
        router.push('/admin/gallery');
      }
    } catch (err: any) {
      setError(err.message || 'Invalid administrator credentials.');
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - var(--header-height) - 100px)',
        backgroundColor: '#121214',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#1D1D1F',
          borderRadius: '16px',
          padding: '40px',
          border: '1px solid rgba(245, 166, 35, 0.3)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
          color: '#FFFFFF',
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: '220px',
            height: '56px',
            position: 'relative',
            margin: '0 auto 24px auto',
          }}
        >
          <Image
            src="/logos/vesta-group.png"
            alt="Vesta Future Admin"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--gold-primary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '6px',
            }}
          >
            <ShieldCheck size={16} />
            Restricted Admin Portal
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Executive Login</h2>
        </div>

        {error && (
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #EF4444',
              borderRadius: '6px',
              color: '#FCA5A5',
              fontSize: '0.825rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Administrator Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail
                size={18}
                color="var(--gold-primary)"
                style={{ position: 'absolute', left: '14px', top: '14px' }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vestafuture.com"
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '6px',
                  backgroundColor: '#26262A',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={18}
                color="var(--gold-primary)"
                style={{ position: 'absolute', left: '14px', top: '14px' }}
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '6px',
                  backgroundColor: '#26262A',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '10px', padding: '14px' }}
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            <ArrowRight size={16} />
          </button>
        </form>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.45)',
          }}
        >
          Protected with JWT &amp; bcrypt 12-round encryption.
        </div>
      </div>
    </div>
  );
}
