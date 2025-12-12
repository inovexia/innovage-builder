import { useState } from 'react';

// Convert camelCase → kebab-case
function toKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Parse Builder typography into inline + mobile
function normalizeStyle(input) {
  if (!input) return { inline: {}, mobile: {} };

  const inline = {};
  const mobile = {};

  if (typeof input === 'string') {
    input.split(';').forEach((rule) => {
      if (!rule.includes(':')) return;
      const [prop, val] = rule.split(':').map((s) => s.trim());
      inline[prop] = val;
    });
    return { inline, mobile };
  }

  if (typeof input === 'object') {
    Object.entries(input).forEach(([key, val]) => {
      if (key.startsWith('@media')) {
        // store mobile styles
        Object.entries(val).forEach(([prop, v]) => {
          mobile[prop] = v;
        });
      } else {
        inline[key] = val;
      }
    });
  }

  return { inline, mobile };
}

// Generates media query CSS
function mobileCSS(className, mobileObj) {
  const rules = Object.entries(mobileObj)
    .map(([prop, val]) => `${toKebab(prop)}:${val};`)
    .join('');

  if (!rules) return '';

  return `
    @media (max-width: 767px) {
      .${className} {
        ${rules}
      }
    }
  `;
}

export default function ServicesTab({
  tabs = [],
  tabTitleTypography,
  headingTypography,
  descriptionTypography,
  buttonTypography,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  const tabTitle = normalizeStyle(tabTitleTypography);
  const heading = normalizeStyle(headingTypography);
  const desc = normalizeStyle(descriptionTypography);
  const btn = normalizeStyle(buttonTypography);

  // Convert inline from object → camelCase JS style object
  const toInline = (obj) => {
    const r = {};
    Object.entries(obj).forEach(([k, v]) => {
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      r[camel] = v;
    });
    return r;
  };

  return (
    <section style={{ padding: '0 0 0 50px' }}>
      {/* Inject mobile CSS */}
      <style>
        {mobileCSS('services-tab-title', tabTitle.mobile)}
        {mobileCSS('services-heading', heading.mobile)}
        {mobileCSS('services-description', desc.mobile)}
        {mobileCSS('services-button', btn.mobile)}
      </style>

      {/* TAB TITLES */}
      <div
        className='tab-title'
        style={{
          display: 'flex',
          gap: '40px'
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className='services-tab-title'
            onClick={() => setActiveIndex(index)}
            style={{
              background: 'none',
              border: 'none',
              padding: '15px 0',
              cursor: 'pointer',
              fontWeight: index === activeIndex ? '700' : '400',
              color: index === activeIndex ? '#0E73C0' : '#000',
              borderBottom:
                index === activeIndex
                  ? '3px solid #0E73C0'
                  : '3px solid transparent',

              ...toInline(tabTitle.inline), // DESKTOP ONLY
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div
        className='tab-content'
        style={{
          display: 'flex',
          gap: '40px',
          marginTop: '50px',
          paddingTop: '50px',
          paddingBottom: '50px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 45%', textAlign: 'center' }}>
          <img
            src={activeTab?.image}
            alt='tab'
            style={{ width: '100%', maxWidth: '450px' }}
          />
        </div>

        <div style={{ flex: '1 1 45%' }}>
          <div
            className='services-heading'
            style={{
              marginBottom: '15px',
              ...toInline(heading.inline), // DESKTOP ONLY
            }}
            dangerouslySetInnerHTML={{ __html: activeTab?.heading }}
          ></div>

          <div
            className='services-description'
            style={{
              marginBottom: '20px',
              ...toInline(desc.inline), // DESKTOP ONLY
            }}
            dangerouslySetInnerHTML={{ __html: activeTab?.description }}
          ></div>

          <button
            className='services-button'
            style={{
              marginTop: '25px',
              padding: '12px 25px',
              background: '#0E73C0',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              ...toInline(btn.inline), // DESKTOP ONLY
            }}
          >
            {activeTab?.buttonText || 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
}
