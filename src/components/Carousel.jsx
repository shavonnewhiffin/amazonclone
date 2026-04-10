import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/navigation";


import carousel1 from "../assets/images/carousel_1.jpg"
import carousel2 from "../assets/images/carousel_2.jpg"
import carousel3 from "../assets/images/carousel_3.jpg"
import carousel4 from "../assets/images/carousel_4.jpg"
import carousel5 from "../assets/images/carousel_5.jpg"
import carouselVideo from "../assets/videos/carousel_vid.mp4"

const Carousel = () => {
    // Grabbing swiper to prevent swipe while video plays
    const swiperRef = useRef(null);

  return (
    <div className="h-[600px] bg-white">
        <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false}}
        className="h-[50%]"
        onSwiper={(swiper) => (swiperRef.current =swiper)} 
        >
<SwiperSlide>
    <img src={carousel1} alt="" />
</SwiperSlide>
<SwiperSlide>
    <img src={carousel2} alt="" />
</SwiperSlide>
<SwiperSlide>
   <video 
   controls
    muted="muted"
     className="bg-black w-full h-full object-cover"
     onPlay={() => swiperRef.current?.autoplay.stop()}
     onPause={() => swiperRef.current?.autoplay.start()}
     onEnded={() => swiperRef.current?.autoplay.start()}
     >
    <source src={carouselVideo} type="video/mp4"/>
   </video>
</SwiperSlide>
<SwiperSlide>
    <img src={carousel4} alt="" />
</SwiperSlide>
<SwiperSlide>
    <img src={carousel5} alt="" />
</SwiperSlide>
        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  )
}

export default Carousel