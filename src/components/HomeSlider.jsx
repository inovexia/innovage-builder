'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeSlider(props) {
  const {
    slides = [],

    autoplay = true,
    speed = 600,
    delay = 3000,
    showDots = true,
    showArrows = true,

    /* --------------------
       DOTS CUSTOMIZATION
    ---------------------*/
    dotsColor = '#cccccc',
    dotsActiveColor = '#0E73C0',
    dotsSize = 10,
    dotsAlign = 'center', // left, center, right

    /* --------------------
       TYPOGRAPHY (DESKTOP)
    ---------------------*/
    titleSize = '48px',
    titleWeight = '700',
    titleColor = '#000000',
    titleFamily = 'inherit',

    descriptionSize = '18px',
    descriptionWeight = '400',
    descriptionColor = '#666666',
    descriptionFamily = 'inherit',

    btn1TextColor = '#ffffff',
    btn1BgColor = '#007bff',
    btn1BorderColor = '#007bff',
    btn1FontSize = '15px',
    btn1FontWeight = '500',
    btn1Radius = '30px',

    btn2TextColor = '#007bff',
    btn2BgColor = 'transparent',
    btn2BorderColor = '#007bff',
    btn2FontSize = '15px',
    btn2FontWeight = '500',
    btn2Radius = '30px',

    /* --------------------
       TYPOGRAPHY (MOBILE)
    ---------------------*/
    titleSizeMobile = '28px',
    descriptionSizeMobile = '15px',
    btn1FontSizeMobile = '14px',
    btn2FontSizeMobile = '14px',

    /* IMAGE SETTINGS */
    imageWidth = '420px',
    imageHeight = '420px',
  } = props;

  return (
    <Container fluid className='px-0'>
      {/* Custom Pagination Styling */}
      <style>{`
        /* ---- Pagination Alignment ---- */
        .swiper-pagination {
          text-align: ${dotsAlign} !important;
          width: 100%;
          padding-right: ${dotsAlign === 'right' ? '40px' : '0'};
          padding-left: ${dotsAlign === 'left' ? '40px' : '0'};
        }

        /* ---- Dots Default ---- */
        .swiper-pagination-bullet {
          width: ${dotsSize}px !important;
          height: ${dotsSize}px !important;
          background: ${dotsColor} !important;
          opacity: 1 !important;
        }

        /* ---- Active Dot ---- */
        .swiper-pagination-bullet-active {
          background: ${dotsActiveColor} !important;
        }

        /* ---- Mobile Typography Overrides ---- */
        @media (max-width: 991px) {

          .slider-title {
            font-size: ${titleSizeMobile} !important;
          }

          .slider-description {
            font-size: ${descriptionSizeMobile} !important;
          }

          .slider-btn-1 {
            font-size: ${btn1FontSizeMobile} !important;
          }

          .slider-btn-2 {
            font-size: ${btn2FontSizeMobile} !important;
          }

        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={showArrows}
        pagination={showDots ? { clickable: true } : false}
        autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
        speed={speed}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Container>
              <Row className='align-items-center py-5'>
                {/* LEFT CONTENT */}
                <Col xs={12} lg={6} className='text-start'>
                  <h2
                    className='slider-title'
                    style={{
                      fontSize: titleSize,
                      fontWeight: titleWeight,
                      color: titleColor,
                      fontFamily: titleFamily,
                      lineHeight: '1.2',
                    }}
                  >
                    {slide.title}
                  </h2>

                  <p
                    className='slider-description mt-3'
                    style={{
                      fontSize: descriptionSize,
                      fontWeight: descriptionWeight,
                      color: descriptionColor,
                      fontFamily: descriptionFamily,
                      maxWidth: '500px',
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* BUTTONS */}
                  <div className='d-flex gap-3 mt-4 flex-wrap'>
                    <a
                      href={slide.button1Link}
                      className='slider-btn-1'
                      style={{
                        background: btn1BgColor,
                        color: btn1TextColor,
                        border: `1px solid ${btn1BorderColor}`,
                        fontSize: btn1FontSize,
                        fontWeight: btn1FontWeight,
                        borderRadius: btn1Radius,
                        padding: '12px 28px',
                        textDecoration: 'none',
                      }}
                    >
                      {slide.button1Text}
                    </a>

                    <a
                      href={slide.button2Link}
                      className='slider-btn-2'
                      style={{
                        background: btn2BgColor,
                        color: btn2TextColor,
                        border: `1px solid ${btn2BorderColor}`,
                        fontSize: btn2FontSize,
                        fontWeight: btn2FontWeight,
                        borderRadius: btn2Radius,
                        padding: '12px 28px',
                        textDecoration: 'none',
                      }}
                    >
                      {slide.button2Text}
                    </a>
                  </div>
                </Col>

                {/* RIGHT IMAGE – Desktop only */}
                <Col lg={6} className='d-none d-lg-flex justify-content-center'>
                  <div className='image-wrapper'>
                    <img
                      src={slide.image}
                      alt='slide'
                      style={{
                        width: imageWidth,
                        height: imageHeight,
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
