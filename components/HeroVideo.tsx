import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const HeroVideo = ({
  categoryVideo,
  category,
}: {
  categoryVideo: boolean;
  category: string;
}) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [phoneScreen, setPhoneScreen] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibilityThreshold = useRef(0);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPhoneScreen(true);
      }
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const videoTop = rect.top;
      const videoBottom = rect.bottom;

      if (
        videoBottom - visibilityThreshold.current > 0 &&
        videoTop < window.innerHeight
      ) {
        if (pauseTimeout.current) {
          clearTimeout(pauseTimeout.current);
          pauseTimeout.current = null;
        }
        videoRef.current.play();
        setPlayVideo(true);
      } else {
        if (!pauseTimeout.current) {
          pauseTimeout.current = setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.pause();
              pauseTimeout.current = null;
            }
          }, 300); // Adjust the delay time (in milliseconds) as per your requirement
        }
        setPlayVideo(false);
      }
    };

    // Calculate the visibility threshold
    visibilityThreshold.current = window.innerHeight * (1 / 2.5);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (pauseTimeout.current) {
        clearTimeout(pauseTimeout.current);
        pauseTimeout.current = null;
      }
    };
  }, []);

  return (
    <section className=" relative">
      {phoneScreen ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className=" w-full h-screen object-cover"
          src="/hero-video.mp4"
        ></video>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className=" w-full h-screen object-cover"
          src="/hero-video.mp4"
        ></video>
      )}
      <div className=" absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center">
        <Image
          className={`absolute ease-in-out object-cover duration-300 ${
            playVideo ? "opacity-0" : "opacity-100"
          }`}
          src="/mtbike.png"
          fill={true}
          sizes="100vw"
          priority={true}
          alt="video reel"
        ></Image>
        {categoryVideo && (
          <article className=" group text-5xl sm:text-7xl uppercase font-extrabold backdrop-blur-sm bg-black/30 px-10 flex items-center justify-center relative overflow-hidden w-full sm:w-auto">
            <h1
              className={`h-full py-7 ease-in-out duration-300 ${
                showAnimation ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              {category}
            </h1>
          </article>
        )}
      </div>
    </section>
  );
};

export default HeroVideo;
