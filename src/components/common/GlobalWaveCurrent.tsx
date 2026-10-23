'use client';

import React from 'react';

interface VerticalColumn {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
  glowColor: string;
}

export const GlobalWaveCurrent: React.FC = () => {
  // Just 4 well-spaced vertical columns with breathing gaps/breaks
  const COLUMNS: VerticalColumn[] = [
    {
      id: 1,
      left: '15%',
      delay: '0s',
      duration: '6.5s',
      color: '#F5A623',
      glowColor: 'rgba(245, 166, 35, 0.75)',
    },
    {
      id: 2,
      left: '38%',
      delay: '1.8s',
      duration: '7.2s',
      color: '#2AC6E2',
      glowColor: 'rgba(42, 198, 226, 0.7)',
    },
    {
      id: 3,
      left: '65%',
      delay: '3.6s',
      duration: '6.8s',
      color: '#F5A623',
      glowColor: 'rgba(245, 166, 35, 0.75)',
    },
    {
      id: 4,
      left: '88%',
      delay: '5.2s',
      duration: '7.0s',
      color: '#FFB834',
      glowColor: 'rgba(255, 184, 52, 0.75)',
    },
  ];

  return (
    <div
      className="global-current-waves-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999,
        mixBlendMode: 'screen',
        overflow: 'hidden',
      }}
    >
      {/* Vertical Columns with Segmented Breaks & Passing Light Packets */}
      {COLUMNS.map((col) => (
        <div
          key={col.id}
          className="global-vertical-track"
          style={{
            left: col.left,
          }}
        >
          {/* Subtle Segmented Dashed Guideline with Breaks */}
          <div className="global-vertical-dashed-line" />

          {/* Vertical Passing Electric Pulse with Breaks */}
          <div
            className="global-vertical-pulse"
            style={{
              animationDuration: col.duration,
              animationDelay: col.delay,
              background: `linear-gradient(180deg, transparent 0%, ${col.glowColor} 45%, #FFFFFF 85%, transparent 100%)`,
              boxShadow: `0 0 16px ${col.color}, 0 0 28px ${col.color}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};
