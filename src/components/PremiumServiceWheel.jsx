'use client';

import React from 'react';
import '../styles/services.css'; // optional external CSS file

export default function PremiumServiceWheel({
  size = 520,

  centerTop = 'PREMIUM',
  centerBottom = 'SERVICE',
  centerTopColor = '#777',
  centerBottomColor = '#222',
  centerTopSize = 22,
  centerBottomSize = 42,

  fontFamily = 'Inter, sans-serif', // ✅ NEW FONT FAMILY OPTION

  items = [],
}) {
  const count = items.length || 6;
  const deg = 360 / count;
  const radius = size / 2;

  const innerCircle = Math.round(size * 0.52);
  const numberCircle = Math.round(size * 0.15);
  const iconSize = Math.round(size * 0.09);

  const CARD_DISTANCE = radius * 1.45;
  const cardWidth = 260;
  const cardHeight = 140;

  const gradient = items
    .map((it, i) => `${it.color} ${i * deg}deg ${(i + 1) * deg}deg`)
    .join(', ');

  const polar = (angle, distance) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: radius + Math.cos(rad) * distance,
      y: radius + Math.sin(rad) * distance,
    };
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: fontFamily, // ✅ APPLY FONT FAMILY GLOBALLY
      }}
    >
      <style>{`
        .ps-circle { 
          border-radius: 50%; 
          position: absolute; 
        }
        .ps-number {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          background: #fff;
          box-shadow: 0 6px 14px rgba(0,0,0,0.20);
        }
        .ps-card {
          width: 260px;
          padding: 18px 20px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          position: absolute;
        }
        .ps-title-ribbon {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          border-radius: 6px 6px 6px 0;
        }
        .ps-title-ribbon::after {
          content: '';
          position: absolute;
          right: -25px;
          top: 0;
          width: 0;
          height: 0;
          border-top: 50px solid currentColor;
          border-right: 30px solid transparent;
          opacity: 1;
        }
        .ps-desc {
          margin-top: 10px;
          font-size: 14px;
          color: #555;
          line-height: 1.45;
        }
      `}</style>

      <div
        className='ps-container'
        style={{
          position: 'relative',
          width: size,
          height: size,
        }}
      >
        {/* Outer Ring */}
        <div
          className='ps-circle'
          style={{
            width: size,
            height: size,
            background: `conic-gradient(${gradient})`,
            border: '12px solid #fff',
          }}
        />

        {/* Center White Circle */}
        <div
          className='ps-circle'
          style={{
            width: innerCircle,
            height: innerCircle,
            left: radius - innerCircle / 2,
            top: radius - innerCircle / 2,
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            fontFamily: fontFamily, // ✅ APPLY HERE
          }}
        >
          <div
            style={{
              fontSize: centerTopSize,
              color: centerTopColor,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            {centerTop}
          </div>

          <div
            style={{
              marginTop: 6,
              fontSize: centerBottomSize,
              color: centerBottomColor,
              fontWeight: 800,
            }}
          >
            {centerBottom}
          </div>
        </div>

        {/* ITEMS */}
        {items.map((it, i) => {
          const angle = i * deg + deg / 2;

          const posNumber = polar(angle, radius * 1.05);
          const posIcon = polar(angle, radius * 0.62);
          const posCard = polar(angle, radius * 1.48);

          const numberValue = it.number || i + 1;

          const rightSide = Math.cos((angle - 90) * (Math.PI / 180)) > 0;

          return (
            <React.Fragment key={i}>
              {/* ICON */}
              <img
                src={it.icon}
                alt=''
                style={{
                  position: 'absolute',
                  width: iconSize,
                  height: iconSize,
                  left: posIcon.x - iconSize / 2,
                  top: posIcon.y - iconSize / 2,
                }}
              />

              {/* NUMBER */}
              <div
                className='ps-number'
                style={{
                  width: numberCircle,
                  height: numberCircle,
                  border: `6px solid ${it.color}`,
                  color: it.color,
                  fontSize: numberCircle * 0.42,
                  left: posNumber.x - numberCircle / 2,
                  top: posNumber.y - numberCircle / 2,
                  fontFamily: fontFamily, // ✅ APPLY
                }}
              >
                {numberValue}
              </div>

              {/* CARD */}
              <div
                className={`ps-card ps-card-${i + 1}`}
                style={{
                  left: rightSide ? posCard.x : posCard.x - cardWidth,
                  top: posCard.y - cardHeight / 2,
                  fontFamily: fontFamily, // ✅ APPLY
                }}
              >
                <div
                  className='ps-title-ribbon'
                  style={{ background: it.color, color: it.color }}
                >
                  <span style={{ color: '#fff', fontFamily: fontFamily }}>
                    {it.title}
                  </span>
                </div>

                <div
                  className='ps-desc'
                  style={{ fontFamily: fontFamily }} // ✅ APPLY
                >
                  {it.desc}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}