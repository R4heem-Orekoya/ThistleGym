import React from "react";
import client1 from "./assets/client1.jpg";
import client2 from "./assets/client2.jpg";
import client3 from "./assets/client3.jpg";
import client4 from "./assets/client4.jpg";
import client5 from "./assets/client5.jpg";
import star from "./assets/star.png";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="py-[80px]">
      <h2 className="text-center text-2xl font-semibold sm:text-lg">
        What Our Clients Say About Us
      </h2>

      <Slider />
    </section>
  );
};

const Slider = () => (
  <Swiper
    className="p-3 relative mt-16 pb-[45px] h-[300px]"
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
    <SwiperSlide className="ring-1 ring-purple-500/40 p-6 overflow-hidden group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={client2}
            alt="image"
            className="w-[50px] aspect-square object-cover rounded-full"
          />
          <div>
            <h3 className="text-sm font-bold">Riss Jacob</h3>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <h3>4.8</h3>
          <img src={star} alt="star" className="w-[15px]" />
        </div>
      </div>
      <p className="text-lg mt-6 sm:mt-4 sm:text-base font-thin">
        Great place to workout. Excellent facility that is highly maintained by
        freindly staffs.
      </p>
    </SwiperSlide>

    <SwiperSlide className="ring-1 ring-purple-500/40 p-6 overflow-hidden group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={client3}
            alt="image"
            className="w-[50px] aspect-square object-cover rounded-full"
          />
          <div>
            <h3 className="text-sm font-bold">Shaw Hun</h3>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <h3>4.5</h3>
          <img src={star} alt="star" className="w-[15px]" />
        </div>
      </div>
      <p className="text-lg mt-6 sm:mt-4 sm:text-base font-thin">
      Variety of classes, convenient hours, and affordable prices. This gym offers everything I need for a successful workout routine.
      </p>
    </SwiperSlide>

    <SwiperSlide className="ring-1 ring-purple-500/40 p-6 overflow-hidden group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={client1}
            alt="image"
            className="w-[50px] aspect-square object-cover rounded-full"
          />
          <div>
            <h3 className="text-sm font-bold">Esther</h3>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <h3>4.3</h3>
          <img src={star} alt="star" className="w-[15px]" />
        </div>
      </div>
      <p className="text-lg mt-6 sm:mt-4 sm:text-base font-thin">
      Impressive results with personalized plans. Joining this gym was a game-changer for my fitness journey.
      </p>
    </SwiperSlide>
    
    <SwiperSlide className="ring-1 ring-purple-500/40 p-6 overflow-hidden group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={client4}
            alt="image"
            className="w-[50px] aspect-square object-cover rounded-full"
          />
          <div>
            <h3 className="text-sm font-bold">Diego Fernandez</h3>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <h3>4.7</h3>
          <img src={star} alt="star" className="w-[15px]" />
        </div>
      </div>
      <p className="text-lg mt-6 sm:mt-4 sm:text-base font-thin">
      Clean, well-equipped, and accommodating staff make this gym my favorite place to work out
      </p>
    </SwiperSlide>

    <SwiperSlide className="ring-1 ring-purple-500/40 p-6 overflow-hidden group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={client5}
            alt="image"
            className="w-[50px] aspect-square object-cover rounded-full"
          />
          <div>
            <h3 className="text-sm font-bold">Emily Davis</h3>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <h3>4.1</h3>
          <img src={star} alt="star" className="w-[15px]" />
        </div>
      </div>
      <p className="text-lg mt-6 sm:mt-4 sm:text-base font-thin">
      Outstanding trainers, modern equipment, and a motivating atmosphere. This gym helped me reach my fitness goals effectively.
      </p>
    </SwiperSlide>
  </Swiper>
);

export default Testimonials;
