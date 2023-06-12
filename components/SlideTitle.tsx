import { useSwiperSlide } from "swiper/react";

const SlideTitle = ({ title }: { title: string }) => {
  const swiperSlide = useSwiperSlide();
  //   console.log(title, swiperSlide.isActive);

  return (
    <div className="absolute left-0 bottom-0 font-semibold text-xl md:text-2xl pb-6 sm:pl-10 md:pl-14 lg:pl-20 text-center w-full sm:w-fit">
      <h2
        className={`ease-out duration-300 delay-300 ${
          swiperSlide.isActive
            ? " translate-x-0 opacity-100"
            : " translate-x-36 opacity-0"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SlideTitle;
