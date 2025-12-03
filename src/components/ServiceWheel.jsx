// ServiceWheel.jsx
import React from 'react';

export default function ServiceWheel({
  size = 360,
  centerTitleTop = 'PREMIUM',
  centerTitleBottom = 'SERVICE',
  segments = [
    { color: '#2bb07f', icon: '/icons/gear.svg', label: 'A' },
    { color: '#8ad34f', icon: '/icons/doc.svg', label: 'B' },
    { color: '#ef5350', icon: '/icons/chart.svg', label: 'C' },
    { color: '#ec6c3a', icon: '/icons/light.svg', label: 'D' },
    { color: '#5b6be6', icon: '/icons/target.svg', label: 'E' },
    { color: '#7e58b8', icon: '/icons/search.svg', label: 'F' },
  ],
}) {
  const inner = Math.round(size * 0.47); // center circle diameter
  const iconSize = Math.round(size * 0.12);
  // compute conic gradient stops
  const degPer = 360 / segments.length;
  const gradient = segments
    .map((s, i) => `${s.color} ${i * degPer}deg ${(i + 1) * degPer}deg`)
    .join(', ');

  // compute icon positions around circle
  const icons = segments.map((s, i) => {
    const angle = (i / segments.length) * Math.PI * 2 - Math.PI / 2; // start at top
    const radius = (size / 2) * 0.78; // distance from center
    const cx = size / 2 + radius * Math.cos(angle) - iconSize / 2;
    const cy = size / 2 + radius * Math.sin(angle) - iconSize / 2;
    return { ...s, cx, cy };
  });

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: `conic-gradient(${gradient})`,
          boxShadow: `0 0 0 ${Math.round(size * 0.05)}px white inset`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          width: inner,
          height: inner,
          borderRadius: '50%',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ lineHeight: 1 }}>
          <div
            style={{
              fontSize: Math.round(size * 0.05),
              color: '#777',
              letterSpacing: 1,
            }}
          >
            {centerTitleTop}
          </div>
          <div style={{ fontSize: Math.round(size * 0.08), fontWeight: 700 }}>
            {centerTitleBottom}
          </div>
        </div>
      </div>

      {icons.map((it, idx) => (
        <a
          key={idx}
          href={it.link || '#'}
          style={{
            position: 'absolute',
            left: it.cx,
            top: it.cy,
            width: iconSize,
            height: iconSize,
            display: 'block',
            transform: 'translate(0,0)',
          }}
        >
          <img
            src={it.icon}
            alt={it.label}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </a>
      ))}
    </div>
  );
}
