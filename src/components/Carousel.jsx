import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper base styles — required for layout to work correctly
import "swiper/css";
import "swiper/css/navigation";

// Hero carousel images
import carousel1 from "../assets/images/carousel_1.jpg";
import carousel2 from "../assets/images/carousel_2.jpg";
import carousel4 from "../assets/images/carousel_4.jpg";
import carousel5 from "../assets/images/carousel_5.jpg";

// Carousel video
import carouselVideo from "../assets/videos/carousel_vid.mp4";

// The index (0-based) of the video slide in the Swiper list below.
const VIDEO_SLIDE_INDEX = 2;

const Carousel = () => {
  // swiperRef to control the Swiper instance (e.g. pause/resume autoplay)

  const swiperRef = useRef(null);

  // videoRef ro control the <video> element directly
  const videoRef = useRef(null);

  // Runs every time the active slide changes.
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex; // realIndex ignores Swiper's loop

    if (realIndex === VIDEO_SLIDE_INDEX) {
      // When on the video slide:
      // 1. Play the video
      // 2. Stop Swiper from auto-advancing so the video can finish
      videoRef.current?.play();
      swiper.autoplay?.stop();
    } else {
      // Once user has left the video slide (or are on any other slide):
      // 1. Pause the video and reset it to the beginning
      // 2. Resume Swiper autoplay
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      swiper.autoplay?.start();
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="h-full w-full"
        // Store the Swiper instance in swiperRef for access
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // Called every time the active slide changes
        onSlideChange={handleSlideChange}
      >
        {/* Slide 0 */}
        <SwiperSlide>
          <img
            src={carousel1}
            alt=""
            className="object-cover w-full aspect-[1310/587]"
          />
        </SwiperSlide>

        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src={carousel2}
            alt=""
            className="object-cover w-full aspect-[1310/587]"
          />
        </SwiperSlide>

        {/* Slide 2 — VIDEO (matches VIDEO_SLIDE_INDEX above) */}
        <SwiperSlide className="bg-black">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full object-cover aspect-[1310/587]"
            onEnded={() => {
              // When the video finishes: advance to the next slide
              // and resume Swiper autoplay for the remaining slides
              swiperRef.current?.slideNext();
              swiperRef.current?.autoplay.start();
            }}
          >
            <source src={carouselVideo} type="video/mp4" />
          </video>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src={carousel4}
            alt=""
            className="object-cover w-full aspect-[1310/587]"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src={carousel5}
            alt=""
            className="object-cover w-full aspect-[1310/587]"
          />
        </SwiperSlide>
      </Swiper>

      {/* Gradient overlay — fades the bottom of the carousel into the page background.*/}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-stone-900 pointer-events-none z-10" />
    </div>
  );
};

export default Carousel;
