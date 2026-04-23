import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";


const CarouselProduct = () => {
  return (
    <div className="bg-white m-3 pb-4 mb-3">
        <div className="text-2xl font-semibold p-3"> Best Sellers</div>
          <Swiper
        // slidesPerView={7}
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
              slidesPerView: 7,
            },
          }}
        className=""
          wrapperClass="pl-6"
      >
        {
            Array.from( { length: 9}, (item, i) => <SwiperSlide key={i}>
                <Link to={`/product/${i}`}>
                <img src={`/images/product_${i}_small.jpg`} alt="" className="object-contain"/>
                </Link>
            </SwiperSlide>
            )
        }
      </Swiper>
    </div>
  )
}

export default CarouselProduct