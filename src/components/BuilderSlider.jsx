'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function BuilderSlider({
  slides = [],
  showArrows = true,
  showDots = true,
  dotsPosition = 'center',
  contentPosition = 'center',
  sliderHeight = '500px',
  sliderWidth = '100%',
  contentWidth = '600px',
  autoplay = false,
  autoplayDelay = 3000,
  transitionSpeed = 600,

  // Builder style object (uiStyle)
  titleTypography = {},
  subtitleTypography = {},

  // Raw CSS strings (global)
  titleCss = '',
  subtitleCss = '',
  buttonCss = '',
}) {
  // Unique id to scope styles
  const uid = React.useMemo(
    () => `builder-slider-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  // Build style block: scoped global + per-slide
  const combinedCss = React.useMemo(() => {
    let css = '';

    // Global scoped rules
    if (titleCss && titleCss.trim()) {
      css += `.${uid} .slide-title { ${titleCss} }\n`;
    }
    if (subtitleCss && subtitleCss.trim()) {
      css += `.${uid} .slide-subtitle { ${subtitleCss} }\n`;
    }
    if (buttonCss && buttonCss.trim()) {
      css += `.${uid} .slider-btn { ${buttonCss} }\n`;
    }

    // Per-slide overrides: slides may have slide.titleCss / slide.subtitleCss
    slides.forEach((s, i) => {
      const idxClass = `slide-idx-${i}`;
      if (s && s.titleCss && s.titleCss.trim()) {
        css += `.${uid} .${idxClass} .slide-title { ${s.titleCss} }\n`;
      }
      if (s && s.subtitleCss && s.subtitleCss.trim()) {
        css += `.${uid} .${idxClass} .slide-subtitle { ${s.subtitleCss} }\n`;
      }
      if (s && s.buttonCss && s.buttonCss.trim()) {
        css += `.${uid} .${idxClass} .slider-btn { ${s.buttonCss} }\n`;
      }
    });

    return css;
  }, [uid, titleCss, subtitleCss, slides]);

  return (
    <div
      className={`${uid} builder-slider-wrapper`}
      style={{ width: sliderWidth, height: sliderHeight, position: 'relative' }}
    >
      {/* Inject scoped CSS for raw style editing */}
      {combinedCss ? <style>{combinedCss}</style> : null}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={showArrows}
        pagination={showDots ? { clickable: true } : false}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              }
            : false
        }
        speed={transitionSpeed}
        loop={true}
        className={`mySwiper dots-${dotsPosition}`}
      >
        {slides.map((slide, index) => {
          const idxClass = `slide-idx-${index}`;
          return (
            <SwiperSlide key={index}>
              <div
                className={`slide-wrapper ${idxClass} content-${contentPosition}`}
                style={{
                  position: 'relative',
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
                  overflow: 'hidden',
                }}
              >
                {/* Overlay Layer */}
                <div
                  className='slide-overlay'
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: slide.overlayColor || 'rgba(0,0,0,0.4)', // fallback
                    opacity: slide.overlayOpacity ?? 0.5,
                    zIndex: 1,
                  }}
                ></div>

                {/* Content wrapper (above overlay) */}
                <div
                  className='content-box'
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: contentWidth,
                    width: '100%',
                  }}
                >
                  {slide.title && (
                    <h2
                      className='slide-title'
                      style={{
                        margin: 0,
                        ...(titleTypography || {}),
                        ...(slide.titleStyle || {}),
                      }}
                    >
                      {slide.title}
                    </h2>
                  )}

                  {slide.subtitle && (
                    <p
                      className='slide-subtitle'
                      style={{
                        marginTop: 10,
                        ...(subtitleTypography || {}),
                        ...(slide.subtitleStyle || {}),
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  )}

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
              </div>
            </SwiperSlide>
          );
        })}
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
