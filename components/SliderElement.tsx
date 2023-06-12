import { Pagination, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import SwiperNavButtons from "./SwiperNavButtons";
import SlideTitle from "./SlideTitle";

interface SliderProps {
  slides: { title?: string; imgUrl: string }[];
}

const SliderElement: React.FC<SliderProps> = ({ slides }) => {
  const router = useRouter();
  const currentPath = router.route;

  return (
    <section className="sm:mx-5 md:mx-14 mb-12 lg:mb-16 lg:grid grid-cols-12">
      <Swiper
        // install Swiper modules
        className={`${
          currentPath !== "/works/[slug]" && "xl:col-start-2 xl:col-span-10"
        } col-span-12 w-full aspect-video md:aspect-[7/4] flex items-center justify-center relative`}
        modules={[Pagination, A11y, Virtual]}
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="w-full h-full relative">
              <Image
                className=" object-cover"
                src={slideContent.imgUrl}
                fill={true}
                sizes="(min-width: 1023px) 50vw, 100vw"
                alt="our team"
              ></Image>
              {slideContent.title && <SlideTitle title={slideContent.title} />}
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </section>
  );
};

export default SliderElement;
