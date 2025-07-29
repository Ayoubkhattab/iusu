"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import WhoUsWhyCard from "./WhoUsWhyCard";
// WhoUsCardsText

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { WhoUsCardsText as data } from "@/app/[locale]/texts";
export default function WhouUsWhySliderCard() {
  return (
    <Swiper
      grabCursor
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide
          className="overflow-hidden py-5"
          key={`slide-whous-${index + 1}`}
        >
          <div className="mx-auto min-w-[250px] max-w-[250px]">
            <WhoUsWhyCard text={item.text} image={item.image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
