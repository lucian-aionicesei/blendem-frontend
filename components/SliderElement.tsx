import { Pagination, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ImageAsset } from "@/utils/interfaces";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import SwiperNavButtons from "./SwiperNavButtons";
import SlideTitle from "./SlideTitle";

const SliderElement = ({ slides }: { slides: ImageAsset[] }) => {
  const router = useRouter();
  const currentPath = router.route;

  return (
    <section className="sm:mx-5 md:mx-14 mb-12 lg:mb-16 lg:grid grid-cols-12">
      <Swiper
        // install Swiper modules
        className={`${
          currentPath !== "/works/[slug]"
            ? "xl:col-start-2 xl:col-span-10 md:aspect-[7/4]"
            : "md:aspect-[2/1]"
        } col-span-12 w-full aspect-video flex items-center justify-center relative`}
        modules={[Pagination, A11y, Virtual]}
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="w-full h-full relative">
              <Image
                className="object-cover"
                src={slideContent.filename}
                fill={true}
                sizes="(min-width: 1023px) 50vw, 100vw"
                alt="our team"
              />
              <SlideTitle title={slideContent.name} />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </section>
  );
};

export default SliderElement;
