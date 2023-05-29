import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper.module.css";

const SliderlElement = () => {
  return (
    <section className="sm:mx-5 md:mx-14 lg:grid grid-cols-12">
      <Swiper
        // install Swiper modules
        className="w-full col-start-2 col-span-10 aspect-video"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className=" bg-green-800 h-36">
            <Image
              className=" object-cover"
              src="/our-team.png"
              fill={true}
              sizes="(min-width: 1023px) 50vw, 100vw"
              alt="our team"
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className=" object-cover"
            src="/broadcast.png"
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className=" object-cover"
            src="/nature.png"
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className=" object-cover"
            src="/documentary.png"
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default SliderlElement;
