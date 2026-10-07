'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/lib/api';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'General Group Inquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setStatus('error');
      setStatusMsg('Please provide your name and message.');
      return;
    }

    setStatus('submitting');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setStatusMsg('Thank you for contacting Vesta Future. Our team will get back to you promptly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        division: 'General Group Inquiry',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setStatusMsg(err.message || 'Submission failed. Please try again or reach out on WhatsApp.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '36px',
        borderRadius: '12px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <h3
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '24px',
          color: 'var(--text-dark-primary)',
        }}
      >
        Send an Executive Inquiry
      </h3>

      {status === 'success' && (
        <div
          style={{
            padding: '14px 18px',
            backgroundColor: '#ECFDF5',
            border: '1px solid #10B981',
            borderRadius: '6px',
            color: '#065F46',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <CheckCircle2 size={18} />
          <span>{statusMsg}</span>
        </div>
      )}

      {status === 'error' && (
        <div
          style={{
            padding: '14px 18px',
            backgroundColor: '#FEF2F2',
            border: '1px solid #EF4444',
            borderRadius: '6px',
            color: '#991B1B',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <AlertCircle size={18} />
          <span>{statusMsg}</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px',
              color: 'var(--text-dark-primary)',
            }}
          >
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Menon"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px',
              color: 'var(--text-dark-primary)',
            }}
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 95668 66144"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px',
              color: 'var(--text-dark-primary)',
            }}
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourname@domain.com"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '6px',
              color: 'var(--text-dark-primary)',
            }}
          >
            Business Division
          </label>
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              fontSize: '0.9rem',
              outline: 'none',
              backgroundColor: '#FFFFFF',
            }}
          >
            <option value="General Group Inquiry">Vesta Future Group (General)</option>
            <option value="Vesta Future Builders & Developers">Vesta Future Builders & Developers</option>
            <option value="The Seagull Crabs & Fish">The Seagull Crabs & Fish</option>
            <option value="Vesta Sports Infrastructure">Vesta Sports Infrastructure Pvt Ltd</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '6px',
            color: 'var(--text-dark-primary)',
          }}
        >
          Message / Requirement *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project, inquiry, or partnership requirement..."
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '6px',
            border: '1px solid var(--border-light)',
            fontSize: '0.9rem',
            outline: 'none',
            resize: 'vertical',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary"
        style={{ width: '100%', padding: '14px' }}
      >
        <Send size={16} />
        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
};
