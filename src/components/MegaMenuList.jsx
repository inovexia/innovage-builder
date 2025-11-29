import React from 'react';

export default function MegaMenuList({
  items = [],
  itemsPerColumn = 4,
  className = '',
  style = {},
}) {
  const column1 = items.slice(0, itemsPerColumn);
  const column2 = items.slice(itemsPerColumn);

  return (
    <div className={className} style={style}>
      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Column 1 */}
        <div
          className='builder-column'
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          {column1.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className='builder-list-item'
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <span className='builder-icon'>{item.icon}</span>
              <span className='builder-text'>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Column 2 */}
        <div
          className='builder-column'
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          {column2.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className='builder-list-item'
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <span className='builder-icon'>{item.icon}</span>
              <span className='builder-text'>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
