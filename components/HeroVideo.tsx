import React, { useEffect, useState } from 'react';

const HeroVideo = ({categoryVideo = false}) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [phoneScreen, setPhoneScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPhoneScreen(true);
      }
    };

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

    return ( 
        <section className=" relative">
          {phoneScreen ? (<video muted loop className=' w-full h-screen object-cover' src="/hero-video.mp4"></video>) : (<video muted loop className=' w-full h-screen object-cover' src="/hero-video.mp4"></video>)}
          <div className=" absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center">
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