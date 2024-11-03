"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; // Use SwiperSlide from "swiper/react"
import { EffectCoverflow, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpg";
import image3 from "../../public/3.jpg";


function Carausel() {
  return (
    <div>
      <Swiper
        // direction="vertical"
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        scrollbar={{ draggable: true }}
        modules={[EffectCoverflow, Mousewheel, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div>
          <Image width={200} height={200} src={image1} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <Image width={200} height={200} src={image2} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <Image width={200} height={200} src={image3} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carausel;
