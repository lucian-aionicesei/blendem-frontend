import React, { useEffect, useState, useRef } from 'react';

interface HeroVideoProps {
  categoryVideo: Boolean;
}

const HeroVideo: React.FC<HeroVideoProps> = ({categoryVideo = false}) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [phoneScreen, setPhoneScreen] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);

  useEffect(() => {
    const handleResize = () => {
    //   setWindowWidth(window.innerWidth);
      if (window.innerWidth < 640) {
        setPhoneScreen(true);
        // document.body.style.overflow = "auto";
      }
    };

    // Set the initial window width
    // setWindowWidth(window.innerWidth);

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const videoRef = useRef(null);
  const visibilityThreshold = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const videoTop = rect.top;
      const videoBottom = rect.bottom;

      if (videoBottom - visibilityThreshold.current > 0 && videoTop < window.innerHeight) {
        videoRef.current.play();
        setPlayVideo(true);
      } else {
        videoRef.current.pause();
        setPlayVideo(false);
      }
    };

    // Calculate the visibility threshold
    visibilityThreshold.current = window.innerHeight * (1 / 2.5);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return ( 
        <section className=" relative">
          {phoneScreen ? (<video ref={videoRef} autoPlay muted loop className=' w-full h-screen object-cover' src="/hero-video.mp4"></video>) : (<video ref={videoRef} autoPlay muted loop className=' w-full h-screen object-cover' src="/hero-video.mp4"></video>)}
          <div className=" absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center">
            <img className={`w-full h-full absolute object-cover ease-in-out duration-300 ${playVideo ? 'opacity-0' : 'opacity-100'}`} src="/mtbike.png" alt="" />
            {categoryVideo && 
            <article className=" group text-5xl sm:text-7xl uppercase font-extrabold bg-black/60 px-10 flex items-center justify-center relative overflow-hidden w-full sm:w-auto">
              <h1 className={`h-full py-7 ease-in-out duration-300 group-hover:-translate-y-full ${showAnimation ? 'translate-y-0':'-translate-y-full'}`}>Documentary</h1>
              <p className={`h-full py-7 absolute ease-in-out duration-300 translate-y-full group-hover:-translate-y-0 ${showAnimation ? 'translate-y-full':'-translate-y-0'}`}>Documentary</p>
            </article>}
          </div>
        </section>
     );
}
 
export default HeroVideo;