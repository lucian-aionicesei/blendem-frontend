import { useState, useRef, useEffect } from "react";
import GridVideo from "./GridVideo";
import useScreenWidth from "../hooks/useScreenWidth";
import React, { MouseEvent } from "react";
import { useRouter } from "next/router";

const CategoryGrid: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [sectionPosition, setSectionPosition] = useState({ top: 0, left: 0 });
  const [scrollTop, setScrollTop] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);
  const sectionRef = useRef<HTMLInputElement>(null);
  const { screenWidth } = useScreenWidth();
  const router = useRouter();
  const currentPath = router.route;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    setIsHovering(true);
    setCursorPosition({
      x: e.pageX - sectionPosition.left,
      y: e.pageY - (sectionPosition.top + scrollTop),
    });
  };

  const handleScroll = () => {
    setIsHovering(false);
    const newScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollTop(newScrollTop);
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      // Get the position of the section element
      const { y, x } = sectionElement.getBoundingClientRect();
      setSectionPosition({ top: y, left: x });
    }
  }, [scrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 1024) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [screenWidth]);

  return (
    <section className="sm:mx-5 md:mx-14 mb-12 lg:mb-16">
      {currentPath != "/works" && (
        <h1 className="px-5 sm:px-0 py-3 md:py-5 text-2xl md:text-4xl font-bold uppercase">
          Works
        </h1>
      )}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={sectionRef}
        className="overflow-hidden lg:grid grid-cols-2 font-bold relative"
      >
        {!smallScreen && (
          <div
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            }}
            className="pointer-events-none absolute z-40 "
          >
            <div
              className={` ${
                isHovering ? "scale-100" : "scale-0"
              } h-14 w-14 bg-project-green rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ease-in-out duration-200`}
            >
              <p className="text-base font-bold">Watch</p>
            </div>
          </div>
        )}
        <GridVideo
          videoUrl={"/videos/Documentary_15sec.mp4"}
          imgUrl={"/documentary.png"}
          category={"documentary"}
        />
        <GridVideo
          videoUrl={"/videos/Industry_15sec.mp4"}
          imgUrl={"/industry.png"}
          category={"industry"}
        />
        <GridVideo
          videoUrl={"/videos/Festival_15sec.mp4"}
          imgUrl={"/festival.png"}
          category={"festival"}
        />
        <GridVideo
          videoUrl={"/videos/Culture_15sec.mp4"}
          imgUrl={"/culture.png"}
          category={"culture"}
        />
        <GridVideo
          videoUrl={"/videos/Nature_15sec.mp4"}
          imgUrl={"/nature.png"}
          category={"nature"}
        />
        <GridVideo
          videoUrl={"/videos/Sports_15sec.mp4"}
          imgUrl={"/sports.png"}
          category={"sports"}
        />
        <GridVideo
          videoUrl={"/videos/Broadcast_15sec.mp4"}
          imgUrl={"/broadcast.png"}
          category={"broadcast"}
        />
        <GridVideo
          videoUrl={"/videos/Creative_15sec.mp4"}
          imgUrl={"/creative.png"}
          category={"creative"}
        />
      </div>
    </section>
  );
};

export default CategoryGrid;
