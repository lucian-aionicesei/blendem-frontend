import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import GridVideo from "./GridVideo";
import useScreenWidth from '../hooks/useScreenWidth';

const CategoryGrid = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sectionPosition, setSectionPosition] = useState({top: 0, left:0});
    const sectionRef = useRef<HTMLInputElement>(null);
    const [smallScreen, setSmallScreen] = useState(false);
    const screenWidth = useScreenWidth();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e:any) => {
    setIsHovering(true);
    // console.log(e , e.pageY - sectionPosition.top)
    setCursorPosition({ x: e.pageX - sectionPosition.left, y: e.pageY - sectionPosition.top });
  };

  const handleScroll = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      // Get the position of the section element
      const { top, left, bottom, right } = sectionElement.getBoundingClientRect();

      console.log('Section position:', { top, left, bottom, right });
      setSectionPosition({top: top, left: left});
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        <section onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove} ref={sectionRef} className="overflow-hidden cursor-pointer sm:mx-5 md:mx-14 lg:grid grid-cols-2 font-bold relative">
            {!smallScreen && <div style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }} className="pointer-events-none absolute z-40 ease-out duration-200"><div className={` ${isHovering ? 'scale-100' : 'scale-0'} h-16 w-16 border-project-green bg-black/40 border-2 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ease-in-out duration-200`}><p className="text-base font-bold">Watch</p></div></div>}
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/documentary.png'} category={'documentary'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/industry.png'} category={'industry'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/festival.png'} category={'festival'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/culture.png'} category={'culture'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/nature.png'} category={'nature'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/sports.png'} category={'sports'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/broadcast.png'} category={'broadcast'}/>
            <GridVideo videoUrl={'/hero-video.mp4'} imgUrl={'/creative.png'} category={'creative'}/>
        </section>
     );
}
 
export default CategoryGrid;