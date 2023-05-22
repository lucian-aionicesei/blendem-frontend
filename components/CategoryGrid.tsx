import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

const CategoryGrid = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sectionPosition, setSectionPosition] = useState({top: 0, left:0});
    const sectionRef = useRef<HTMLInputElement>(null);
    const [smallScreen, setSmallScreen] = useState(false);

    const handleArticleEnter = (e:any) => {
        // console.log(e.target.play())
        e.target.play()
      };
    
    const handleArticleLeave = (e:any) => {
        // console.log(e.target.stop())
        e.target.pause()
      };

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
    const handleResize = () => {
    //   setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1024) {
        setSmallScreen(true);
        // document.body.style.overflow = "auto";
        // console.log(smallScreen)
      } else {
        setSmallScreen(false);
      }
    };

    if (window.innerWidth < 1024) {
        setSmallScreen(true);
        // document.body.style.overflow = "auto";
        // console.log(smallScreen)
      } else {
        setSmallScreen(false);
      }


    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // play video when it reaches mis screen
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoElement, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold to 0.5 (50% visibility)
  });

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [inView]);

    return ( 
        <section onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove} ref={sectionRef} className="overflow-hidden cursor-pointer mx-5 md:mx-14 lg:grid grid-cols-2 font-bold relative">
            {!smallScreen && <div style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }} className="pointer-events-none absolute z-40 ease-out duration-200"><div className={` ${isHovering ? 'scale-100' : 'scale-0'} h-16 w-16 border-project-green bg-black/40 border-2 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ease-in-out duration-200`}><p className="text-base font-bold">Watch</p></div></div>}
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative uppercase flex items-center justify-center overflow-hidden">
                <video muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                {/* <section className="">
                    <p>Documentary</p>
                    <Link className="" href="/works/documentary">Watch</Link>
                </section> */}
                <div className=" hidden pointer-events-none absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/documentary.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className=" pointer-events-none absolute lg:border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className=" text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Documentary</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/industry.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Industry</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/festival.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Festival</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/culture.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Culture</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/nature.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Nature</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/sports.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Sports</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/broadcast.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Broadcast</h2>
                    </div>
                </div>
            </article>
            <article onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative text-5xl uppercase flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className=' w-full h-full object-cover' src="/hero-video.mp4"></video>
                <div className="pointer-events-none  absolute top-0 left-0 h-full w-full ease-in-out duration-500 group-hover:opacity-0">
                    <img className="h-full w-full object-cover" src="/creative.png" alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className="pointer-events-none  absolute border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className="px-6 py-4 translate-y-0 group-hover:-translate-y-full ease-in-out duration-500">Creative</h2>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default CategoryGrid;