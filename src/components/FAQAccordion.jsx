'use client';
import React, { useState } from 'react';

export default function FAQAccordion({
  items = [],
  titleFontSize = 20,
  titleFontFamily = 'Arial',
  titleFontWeight = '600',

  answerFontSize = 16,
  answerFontFamily = 'Arial',
  answerFontWeight = '400',

  arrowDownIcon,
  arrowUpIcon,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className='faq-wrapper'>
      {items.map((item, index) => (
        <div key={index} className='faq-item'>
          <div className='faq-header' onClick={() => toggle(index)}>
            <div className='faq-left'>
              {item.icon && (
                <img src={item.icon} className='faq-icon' alt='icon' />
              )}

              <h3
                className='faq-title'
                style={{
                  fontSize: titleFontSize,
                  fontFamily: titleFontFamily,
                  fontWeight: titleFontWeight,
                }}
              >
                {item.title}
              </h3>
            </div>

            <img
              src={openIndex === index ? arrowUpIcon : arrowDownIcon}
              className='faq-arrow'
              alt='arrow'
            />
          </div>

          {openIndex === index && (
            <div
              className='faq-body'
              style={{
                fontSize: answerFontSize,
                fontFamily: answerFontFamily,
                fontWeight: answerFontWeight,
              }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></div>
          )}

          <div className='faq-divider'></div>
        </div>
      ))}

      <style jsx>{`
        .faq-wrapper {
          width: 100%;
        }

        .faq-item {
          padding: 20px 0;
        }

        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .faq-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .faq-icon {
          width: 40px;
          height: 40px;
        }

        .faq-arrow {
          width: 20px;
          height: 20px;
          transition: 0.3s ease;
        }

        .faq-body {
          margin-top: 18px;
          padding-left: 54px;
          line-height: 1.6;
        }

        .faq-divider {
          height: 2px;
          background: #eef2f5;
          margin-top: 18px;
        }
      `}</style>
    </div>
  );
}
