import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <nav className="absolute top-1/2 px-1 md:px-4 -translate-y-1/2 z-30 w-full flex justify-between pointer-events-none">
      <button
        className=" hover:scale-110 ease-out duration-200 pointer-events-auto"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          className="w-9 lg:w-11 h-9 lg:h-11"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="rotate(-180 23.5 23.5)"
            fill="#00A99D"
          />
          <rect
            x="14.6801"
            y="23.3398"
            width="16.4898"
            height="3"
            transform="rotate(-45 14.6801 23.3398)"
            fill="white"
          />
          <rect
            x="26.34"
            y="35"
            width="16.4898"
            height="3"
            transform="rotate(-135 26.34 35)"
            fill="white"
          />
        </svg>
      </button>

      <button
        className=" hover:scale-110 ease-out duration-200 pointer-events-auto"
        onClick={() => swiper.slideNext()}
      >
        <svg
          className="w-9 lg:w-11 h-9 lg:h-11"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23.5" cy="23.5" r="23.5" fill="#00A99D" />
          <rect
            x="32.3199"
            y="23.6602"
            width="16.4898"
            height="3"
            transform="rotate(135 32.3199 23.6602)"
            fill="white"
          />
          <rect
            x="20.66"
            y="12"
            width="16.4898"
            height="3"
            transform="rotate(45 20.66 12)"
            fill="white"
          />
        </svg>
      </button>
    </nav>
  );
};

export default SwiperNavButtons;
