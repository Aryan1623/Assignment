import React, { useState, useEffect, useRef } from 'react';
import './Corousel.css'; // Import any required CSS
import scroll1 from '../../assets/images/Scroll1.png'
import scroll2 from '../../assets/images/Scroll2.png'
import scroll3 from '../../assets/images/Scroll3.png'

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([
    { id: '1', src: `${scroll1}` },
    { id: '2', src: `${scroll2}` },
    { id: '3', src: `${scroll3}` },
  ]);
  const [carouselInView, setCarouselInView] = useState([1, 2, 3]);
  const carouselPlayState = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(carouselPlayState.current);
  }, []);

  const startAutoSlide = () => {
    carouselPlayState.current = setInterval(() => next(), 1500);
  };

  const next = () => {
    setCarouselData(prevData => {
      const newData = [...prevData];
      newData.push(newData.shift());
      return newData;
    });

    setCarouselInView(prevView => {
      const newView = [...prevView];
      newView.unshift(newView.pop());
      return newView;
    });

    updateDots();
  };

  const updateDots = () => {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    const activeIndex = carouselData.findIndex(item => item.id === carouselInView[0].toString());
    dots[activeIndex].classList.add('active');
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {carouselData.slice(0, 3).map((item, index) => (
          <img
            key={item.id}
            className={`carousel-item carousel-item-${index + 1}`}
            src={item.src}
            loading="lazy"
            alt={`carousel-item-${index + 1}`}
            data-index={index + 1}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {carouselData.map((item, index) => (
          <span
            key={item.id}
            className={`carousel-dot carousel-dot-${index + 1} ${carouselInView[0] - 1 === index ? 'active' : ''}`}
            data-index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


