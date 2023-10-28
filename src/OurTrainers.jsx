import React from "react";
import trainer1 from "./assets/trainer1.jpg";
import trainer2 from "./assets/trainer2.jpg";
import trainer3 from "./assets/trainer3.jpg";
import trainer4 from "./assets/trainer4.jpg";
import trainer5 from "./assets/trainer5.jpg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const OurTrainers = () => {
  return (
    <section className="py-[80px] px-3">
      <h2 className="text-center text-2xl font-semibold sm:text-lg">
        Our Trainers
      </h2>

      <Slider />
    </section>
  );
};





const Slider = () => (
  <Swiper
    className="h-[500px] p-3 relative mt-16 pb-[45px]"
    modules={[Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    breakpoints={{
      900: {
        slidesPerView: 3,
      },
      780: {
        slidesPerView: 2,
      },
    }}
  >
    <SwiperSlide className="relative overflow-hidden group">
      <img src={trainer1} alt="" className="h-full w-full object-cover" />
      <div className="absolute w-full bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-8 duration-300 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-3xl font-bold">Adams Chrisworth</h2>
        <p className="text-base">Full Time Instructor</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="relative overflow-hidden group">
      <img src={trainer2} alt="" className="h-full w-full object-cover" />
      <div className="absolute w-full bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-8 duration-300 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-3xl font-bold">Ben Foster</h2>
        <p className="text-base">Full Time Instructor</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="relative overflow-hidden group">
      <img src={trainer3} alt="" className="h-full w-full object-cover" />
      <div className="absolute w-full bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-8 duration-300 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-3xl font-bold">Jessica Rice</h2>
        <p className="text-base">Yoga Instructor</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="relative overflow-hidden group">
      <img src={trainer4} alt="" className="h-full w-full object-cover" />
      <div className="absolute w-full bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-8 duration-300 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-3xl font-bold">Diana Jones</h2>
        <p className="text-base">Yoga Instructor</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="relative overflow-hidden group">
      <img src={trainer5} alt="" className="h-full w-full object-cover" />
      <div className="absolute w-full bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-8 duration-300 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-3xl font-bold">Tom Jaden</h2>
        <p className="text-base">Part Time Instructor</p>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default OurTrainers;
