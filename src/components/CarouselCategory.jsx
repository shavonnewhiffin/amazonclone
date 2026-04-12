import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categories } from "../assets/images/index";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={categories.category1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={categories.category2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={categories.category3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={categories.category4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={categories.category5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
