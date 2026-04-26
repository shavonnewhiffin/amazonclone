import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import HomePageCard from "./HomePageCard";
import { images } from "../assets/images/index";

import "swiper/css";
import "swiper/css/navigation";

const HomePageCards = [
  {
    title: "We have a surprise for you",
    img: images.home1,
    link: "See terms and conditions",
  },
  {
    title: "Watch The Rings of Power",
    img: images.home2,
    link: "Start streaming now",
  },
  {
    title: "Unlimited Streaming",
    img: images.home3,
    link: "Find out more",
  },
  {
    title: "More titles to explore",
    img: images.home4,
    link: "Browse kindle unlimited",
  },
  {
    title: "Shop Pet Supplies",
    img: images.home5,
    link: "See more",
  },
  {
    title: "Spring Sale",
    img: images.home6,
    link: "See the details",
  },
  {
    title: "Echo Buds",
    img: images.home7,
    link: "See more",
  },
  {
    title: "Family Plan: 3 months free",
    img: images.home8,
    link: "Learn more",
  },
];

const FeatureSlides = ({ className }) => {
  return (
    <div className={className}>
      <Swiper
        spaceBetween={20} // Adding space between the slides
        loop={true} // Enables looping of slides
        navigation={true} // Enables navigation arrows
        autoplay={{
          delay: 3000, // 3 seconds for each slide
          disableOnInteraction: false, // Autoplay does not stop on user interaction
        }}
        modules={[Navigation, Autoplay]} // Swiper modules
      >
        {HomePageCards.map((card, index) => (
          <SwiperSlide key={index}>
            <HomePageCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlides;
