import React from "react";
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./index";
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
      <div className="max-w-[1500px] w-full m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {HomePageCards.map((card, index) => (
            <HomePageCard
              key={index}
              title={card.title}
              img={card.img}
              link={card.link}
            />
          ))}
          <div className="m-3 pt-8">
            <img className="xl:hidden"src={banners.banner2} alt="" />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={banners.banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
