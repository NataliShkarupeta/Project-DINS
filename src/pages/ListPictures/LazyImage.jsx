import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt, style }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '150px',
  });

  return (
    <div ref={ref} style={{ minHeight: '200px', ...style }}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', display: 'block' }}
        />
      ) : (
        <div
          style={{ backgroundColor: '#eee', height: '200px', width: '100%' }}
        />
      )}
    </div>
  );
};

export default LazyImage;
