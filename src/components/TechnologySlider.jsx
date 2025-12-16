'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TechnologySlider({
  slides = [],
  slidesPerView = 4,
  spaceBetween = 24,

  cardStyle = {},
  titleStyle = {},
  descStyle = {},
  linkStyle = {},

  imageWidth = '60px',
  imageHeight = 'auto', 
  arrowColor = '#000',
}) {
  if (!Array.isArray(slides) || slides.length === 0) return null;

  const charLimit = Number(descStyle?.charactor_limit) || 100;

  return (
    <div className='tech-slider-wrapper'>
      {/* arrows */}
      <div className='tech-arrow tech-prev' />
      <div className='tech-arrow tech-next' />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.tech-prev',
          nextEl: '.tech-next',
        }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='tech-card' style={cardStyle}>
              {slide.icon && (
                <img
                  src={slide.icon}
                  alt=''
                  style={{
                    width: imageWidth, // can now be '60px', '100%', 'auto', etc.
                    height: imageHeight, // can also be 'auto', '100px', etc.
                    marginBottom: 16,
                  }}
                />
              )}

              <h3 style={titleStyle}>{slide.title}</h3>

              {slide.description && (
                <p style={descStyle}>
                  {slide.description.length > charLimit
                    ? slide.description.substring(0, charLimit) + '...'
                    : slide.description}
                </p>
              )}

              {slide.linkText && slide.linkUrl && (
                <a href={slide.linkUrl} style={linkStyle}>
                  {slide.linkText}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .tech-slider-wrapper {
          position: relative;
          padding: 40px 0;
        }

        .tech-card {
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        /* arrows */
        .tech-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
          cursor: pointer;
        }

        .tech-prev {
          left: -20px;
        }

        .tech-next {
          right: -20px;
        }

        .tech-arrow::after {
          content: '';
          width: 10px;
          height: 10px;
          border-top: 2px solid ${arrowColor};
          border-right: 2px solid ${arrowColor};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .tech-prev::after {
          transform: translate(-50%, -50%) rotate(-135deg);
        }
      `}</style>
    </div>
  );
}
