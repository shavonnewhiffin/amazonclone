import React from "react";
import {
  Carousel,
  HomePageCard,
  CarouselCategory,
  CarouselProduct,
} from "./index";

import { images } from "../assets/images/index";
import { banners } from "../assets/images/index";

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

const HomePage = () => {
  return (
    <div className="bg-[var(--color-background)]">
      <div className="max-w-[1500px] mx-auto">
        {/* HERO */}
        <Carousel />

        {/* GRID SECTION (KEEP OVERLAP HACK) */}
        <div className="relative z-10 px-4 -mt-80">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {HomePageCards.map((card, index) => (
              <HomePageCard key={index} {...card} />
            ))}

            {/* BANNER 2 INSIDE GRID (SAFE VERSION) */}
            <div className="hidden md:block xl:hidden m-3 pt-8 self-start">
              <img
                src={banners.banner2}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* PRODUCT CAROUSEL */}
        <div className="mt-10">
          <CarouselProduct />
        </div>

        {/* CATEGORY */}
        <div className="mt-10">
          <CarouselCategory />
        </div>

        {/* BANNER 1 */}
        <div className="mt-10 px-4">
          <img
            src={banners.banner1}
            alt=""
            className="w-full aspect-[21/5] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
