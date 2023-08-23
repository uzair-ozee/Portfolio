// import React from 'react'
// import "./scrollup.css"
// const ScrollUp = () => {
//     window.addEventListener("scroll", function () {
//         const scrollUp = document.querySelector("scrollup")
//         if(this.scrollY >= 560) scrollUp.classList.add("show-scroll")
//         else scrollUp.classList.remove("show-scroll")
//     })
//   return (
//    <a href="" className="scrollup">
//     <i className="uil uil-arrow-up scrollup__icon"></i>
//    </a>
//   )
// }

// export default ScrollUp


import React, { useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.scrollup');
      if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
