import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ProjectVideo = () => {
  const projectVideo = useRef<HTMLVideoElement | null>(null);
  const videoElement = projectVideo.current;
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, []);

  const [videoContainerRef, inView] = useInView({
    // threshold: 0.5,
    root: null,
    rootMargin: "-50% 0% -50% 0%",
    // Adjust this threshold value as needed
  });

  useEffect(() => {
    // const videoElement = projectVideo.current;

    if (videoElement) {
      if (inView && videoElement.paused) {
        console.log("Video in view");
        videoElement.play();
        setPlaying(true);
      } else if (!inView && !videoElement.paused) {
        console.log("Video in paused");
        videoElement.pause();
        setPlaying(false);
      }
    }
  }, [inView, videoElement]);

  return (
    <section className="sm:mx-5 md:mx-14 h-fit box-border py-2 sm:py-12 xl:py-16 relative aspect-[5/4] sm:aspect-video lg:aspect-[2/1]">
      <div ref={videoContainerRef} className=" w-full h-full"></div>
      <div className="absolute top-0 left-0 aspect-[5/4] sm:aspect-video lg:aspect-[2/1] w-full flex items-center justify-center">
        <video
          className="h-full sm:h-auto object-cover"
          muted
          loop
          ref={projectVideo}
          src="/videos/Nature_15sec.mp4"
        ></video>
      </div>
      <div
        className={`absolute top-0 left-0 h-full w-full pointer-events-none ease-in-out duration-700 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          className="object-cover"
          src="/documentary.png"
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="project name"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
    </section>
  );
};

export default ProjectVideo;
