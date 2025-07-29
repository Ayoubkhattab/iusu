"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
const data = [
  { url: "https://www.youtube.com/embed/8UYy6yRttYw" },
  { url: "https://www.youtube.com/embed/OVlaQZNhdM8" },
  { url: "https://www.youtube.com/embed/WKo0XyPtRCs" },
  { url: "https://www.youtube.com/embed/PbP6BDjnfrw" },
];
export default function SliderVideos() {
  return (
    <div className="flex min-h-screen select-none items-center justify-center">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        // autoplay={{ delay: 5000 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        spaceBetween={70}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        className="h-[500px] w-full"
        breakpoints={{
          1200: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((item, index) => (
          <div key={index}>
            <SwiperSlide className="h-[400px] w-[300px] overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="h-full w-full rounded-xl border-0 outline-0"
                src={item.url}
                title="المقدمة التعريفية للجامعة الإسلامية"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
