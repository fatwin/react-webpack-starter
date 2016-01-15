import * as React from 'react';

export default function IconSVG({ iconFile, className = 'icon' }) {
  return (
    <svg className={className}>
      <use xlinkHref={iconFile} />
    </svg>
  );
}