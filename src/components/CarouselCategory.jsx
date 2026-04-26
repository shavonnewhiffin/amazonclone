import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categories } from "../assets/images/index";
import { useNavigate, createSearchParams, Navigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3 pb-4">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        wrapperClass="px-2"
      >
        <SwiperSlide
          onClick={() => searchCategory("Deals")}
          className="cursor-pointer"
        >
          <img src={categories.category0} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Amazon")}
          className="cursor-pointer"
        >
          <img src={categories.category1} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Fashion")}
          className="cursor-pointer"
        >
          <img src={categories.category2} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Computers")}
          className="cursor-pointer"
        >
          <img src={categories.category3} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Home")}
          className="cursor-pointer"
        >
          <img src={categories.category4} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Mobiles")}
          className="cursor-pointer"
        >
          <img src={categories.category5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
