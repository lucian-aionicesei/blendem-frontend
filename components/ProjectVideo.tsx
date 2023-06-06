import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

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
    <section className="sm:mx-5 md:mx-14 h-fit box-border py-2 sm:py-12 xl:py-16 relative aspect-video">
      <div ref={videoContainerRef} className=" w-full h-full"></div>
      <div className="absolute top-0 left-0 aspect-video w-full">
        <video
          controls
          muted
          loop
          ref={projectVideo}
          src="/videos/Nature_15sec.mp4"
        ></video>
      </div>
    </section>
  );
};

export default ProjectVideo;
