import React from 'react';
import './testimonial.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My client says</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide key={id}>
              <div className="testimonial__card">
                <div className="testimonial__image">
                  <img src={image} alt="" className="testimonial__img" />
                </div>
                <div className="testimonial__content">
                  <h3 className="testimonial__name">{title}</h3>
                  <p className="testimonial__description">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
