'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialSlider({
  testimonials = [],

  desktopItems = 3,
  tabletItems = 2,
  mobileItems = 1,

  showArrows = true,
  arrowColor = '#000',

  autoplay = false,
  autoplayDelay = 3000,

  // Typography
  titleColor = '#000',
  titleFontSize = 20,
  titleFontFamily = 'inherit',

  descriptionColor = '#444',
  descriptionFontSize = 16,
  descriptionFontFamily = 'inherit',

  roleColor = '#777',
  roleFontSize = 14,
  roleFontFamily = 'inherit',

  // Star Settings
  starColor = '#f5b50a',
  starBorderColor = '#ccc',

  // Card Styling
  cardBackground = '#fff',
  cardPadding = 20,
  cardBorderRadius = 12,

  cardShadow = false,
  cardBorder = false,
  cardBorderColor = '#ddd',
  cardBorderWidth = 1,
}) {
  return (
    <div className='testimonial-wrapper'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={showArrows}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        breakpoints={{
          1024: { slidesPerView: desktopItems },
          768: { slidesPerView: tabletItems },
          0: { slidesPerView: mobileItems },
        }}
        spaceBetween={20}
      >
        {testimonials.map((item, index) => {
          const filledStars = item.stars ?? 0; // each card has own star count

          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: cardBackground,
                  padding: cardPadding,
                  borderRadius: cardBorderRadius,
                  textAlign: 'center',
                  boxShadow: cardShadow
                    ? '0px 4px 12px rgba(0,0,0,0.15)'
                    : 'none',
                  border: cardBorder
                    ? `${cardBorderWidth}px solid ${cardBorderColor}`
                    : 'none',
                }}
              >
                {/* Avatar */}
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt='avatar'
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 15px',
                    }}
                  />
                )}

                {/* ⭐ STAR RATING */}
                <div style={{ marginBottom: 10 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                      fill={i < filledStars ? starColor : 'none'}
                      stroke={i < filledStars ? starColor : starBorderColor}
                      strokeWidth='2'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{ marginRight: 2 }}
                    >
                      <path d='M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596l-6-5.848 8.332-1.593z' />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: titleColor,
                    fontSize: titleFontSize,
                    fontFamily: titleFontFamily,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: descriptionColor,
                    fontSize: descriptionFontSize,
                    fontFamily: descriptionFontFamily,
                    marginTop: 8,
                  }}
                >
                  {item.description}
                </p>

                {/* Role */}
                <p
                  style={{
                    color: roleColor,
                    fontSize: roleFontSize,
                    fontFamily: roleFontFamily,
                    marginTop: 12,
                  }}
                >
                  {item.role}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Arrow color */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: ${arrowColor} !important;
        }
      `}</style>
    </div>
  );
}
