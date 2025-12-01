'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function BuilderSlider({
  slides = [],
  showArrows = true,
  showDots = true,
  dotsPosition = 'center', // left, center, right
  contentPosition = 'center', // left, center, right
  sliderHeight = '500px',
  sliderWidth = '100%',
}) {
  return (
    <div
      className='builder-slider-wrapper'
      style={{
        width: sliderWidth,
        height: sliderHeight,
        position: 'relative',
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={showArrows}
        pagination={showDots ? { clickable: true } : false}
        loop={true}
        className={`mySwiper dots-${dotsPosition}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-wrapper content-${contentPosition}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: sliderHeight,
                width: sliderWidth,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:
                  contentPosition === 'center'
                    ? 'center'
                    : contentPosition === 'left'
                    ? 'flex-start'
                    : 'flex-end',
                color: slide.textColor || '#fff',
                padding: '40px',
              }}
            >
              {slide.title && <h2>{slide.title}</h2>}

              {slide.subtitle && <p>{slide.subtitle}</p>}

              {slide.buttonText && (
                <a
                  href={slide.buttonLink || '#'}
                  className='slider-btn'
                  style={{
                    padding: '10px 20px',
                    background: slide.buttonBg || '#000',
                    color: slide.buttonColor || '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '10px',
                  }}
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .builder-slider-wrapper .swiper-button-prev,
        .builder-slider-wrapper .swiper-button-next {
          color: #fff;
        }

        .dots-left .swiper-pagination {
          text-align: left !important;
          left: 20px !important;
        }

        .dots-center .swiper-pagination {
          text-align: center !important;
          left: 0 !important;
          right: 0 !important;
        }

        .dots-right .swiper-pagination {
          text-align: right !important;
          right: 20px !important;
        }

        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>
    </div>
  );
}
