'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function PremiumTestimonialSlider({
  testimonials = [],

  // Slides per view
  desktopItems = 1,
  tabletItems = 1,
  mobileItems = 1,

  // Arrows
  showArrows = true,
  arrowColor = '#fff',

  // Autoplay
  autoplay = false,
  autoplayDelay = 3000,

  // Card styling
  cardPadding = 20,
  cardBorderRadius = 0,
  cardShadow = false,
  cardBorder = false,
  cardBorderColor = '#ddd',
  cardBorderWidth = 1,

  // Text Styling
  quoteColor = '#fff',
  quoteFontSize = 40,

  textColor = '#fff',
  textFontSize = 22,
  textFontFamily = 'inherit',

  nameColor = '#fff',
  nameFontSize = 18,
  nameFontFamily = 'inherit',

  roleColor = '#aaa',
  roleFontSize = 14,
  roleFontFamily = 'inherit',

  // Star styling
  starColor = '#f5c518',
  starSize = 20,
}) {
  return (
    <div className='testimonial-slider-wrapper'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={showArrows}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        spaceBetween={40}
        breakpoints={{
          1024: { slidesPerView: desktopItems },
          768: { slidesPerView: tabletItems },
          0: { slidesPerView: mobileItems },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: cardPadding,
                borderRadius: cardBorderRadius,
                border: cardBorder
                  ? `${cardBorderWidth}px solid ${cardBorderColor}`
                  : 'none',
                boxShadow: cardShadow ? '0px 4px 20px rgba(0,0,0,0.2)' : 'none',
                gap: 40,
              }}
            >
              {/* Left Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt='user'
                  style={{
                    width: '340px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 10,
                  }}
                />
              )}

              {/* Right Side */}
              <div style={{ flex: 1 }}>
                {/* Quote Icon */}
                <div
                  style={{
                    fontSize: quoteFontSize,
                    color: quoteColor,
                    fontFamily: 'serif',
                    lineHeight: 0.6,
                    display: 'inline-block',
                    marginBottom: 0,
                    marginTop: -5,
                  }}
                >❝</div>

                {/* Testimonial Text */}
                <p
                  style={{
                    color: textColor,
                    fontSize: textFontSize,
                    fontFamily: textFontFamily,
                    lineHeight: 1.5,
                    marginTop: -20, // IMPORTANT FIX
                  }}
                >
                  {item.text}
                </p>

                {/* Name */}
                <h4
                  style={{
                    color: nameColor,
                    fontSize: nameFontSize,
                    fontFamily: nameFontFamily,
                    marginTop: 20,
                    marginBottom: 5,
                  }}
                >
                  {item.name}
                </h4>

                {/* Role */}
                <p
                  style={{
                    color: roleColor,
                    fontSize: roleFontSize,
                    fontFamily: roleFontFamily,
                  }}
                >
                  {item.role}
                </p>

                {/* Stars */}
                {item.stars && (
                  <div style={{ marginTop: 10 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: starSize,
                          marginRight: 3,
                          color: i < item.stars ? starColor : 'transparent',
                          WebkitTextStroke:
                            i < item.stars ? `0px` : `1px ${starColor}`,
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ARROW COLOR */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: ${arrowColor} !important;
        }
      `}</style>
    </div>
  );
}
