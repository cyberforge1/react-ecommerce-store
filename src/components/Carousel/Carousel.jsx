import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle to next slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Cycle to previous slide
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(timer); // Clean-up the interval on unmount
  }, [slides.length]);

  return (
    <div className={styles.container}>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className={styles.carouselItem} key={index}>
            {slide}
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={prevSlide}>←</button>
      <button className={styles.button} onClick={nextSlide}>→</button>
    </div>
  );
}

export default Carousel;