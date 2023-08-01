import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import css from './ScrollBtn.module.css';

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (scrolled > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className={css.scroll} onClick={scrollToTop}>
          <MdKeyboardArrowUp fontSize="large" />
        </div>
      )}
    </>
  );
};

export default ScrollBtn;
