import React, { useState } from 'react';
import { Icons } from '../icons/AppIcons';
import './styles/gallery.css';

const Gallery = ({ photos }) => {
  const photoLength = photos.length;
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === photoLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? photoLength - 1 : current - 1);
  };

  return (
    <div className='gallery__container'>
      {photoLength > 1 && (
        <>
          <Icons.ArrowLeftFill className='left-arrow' onClick={prevSlide} />
          <Icons.ArrowRightFill className='right-arrow' onClick={nextSlide} />
        </>
      )}

      {photos.map((photo, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={photo} alt={photo} className='image' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
