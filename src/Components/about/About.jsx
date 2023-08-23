import React from 'react';
import './about.css';
import AboutImg from '../../assests/mypic.jpg';
import Info from './Info';
import CV from "../../assests/Uzair CV.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title" >About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container">
        <div className="about__image-container">
          <img src={AboutImg} alt="" className="about__img" />
        </div>

        <div className="about__content">
          <Info />

          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface. I have years of experience, and many clients are happy with the projects carried out.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              {/* SVG path code */}
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
