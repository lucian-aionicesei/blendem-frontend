import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ProjectVideo = () => {
  const projectVideo = useRef<HTMLVideoElement | null>(null);
  const videoElement = projectVideo.current;
  const [isPlaying, setPlaying] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  const [videoContainerRef, inView] = useInView({
    // threshold: 0.5,
    root: null,
    rootMargin: "-45% 0% -55% 0%",
    // Adjust this threshold value as needed
  });

  const calculateWidth = (progress: number) => {
    return `${progress * 100}%`;
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && projectVideo.current) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      const clickPositionX = event.clientX - progressBarRect.left;
      const progressBarWidth = progressBarRect.width;
      const progress = clickPositionX / progressBarWidth;
      const videoDuration = projectVideo.current.duration;
      const newTimelineProgress = progress * videoDuration;
      projectVideo.current.currentTime = newTimelineProgress;
      setTimelineProgress(newTimelineProgress / videoDuration);
    }
  };

  const handleFullScreenClick = () => {
    if (projectVideo.current) {
      if (projectVideo.current.requestFullscreen) {
        projectVideo.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    let animationFrameId: number;

    const updateTimelineProgress = () => {
      if (projectVideo.current) {
        const progress =
          projectVideo.current.currentTime / projectVideo.current.duration;
        setTimelineProgress(progress);
        animationFrameId = requestAnimationFrame(updateTimelineProgress);
      }
    };
    animationFrameId = requestAnimationFrame(updateTimelineProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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
      <div className="videoControls absolute bottom-0 left-0 w-full z-30 ">
        <div
          className={`${
            isPlaying && "bg-gradient-to-t"
          } w-full h-20 sm:h-24 lg:h-32 from-black/60 px-5 sm:px-10 flex flex-col justify-center`}
        >
          <div className="flex w-full gap-x-5 sm:gap-x-10 items-end">
            <div className="flex-grow">
              <span className=" text-xl md:text-2xl lg:text-3xl font-bold">
                Carp - Mountain Rescue
              </span>
              <div
                onClick={handleProgressBarClick}
                ref={progressBarRef}
                className={`${
                  isPlaying ? "opacity-100" : "opacity-0"
                } w-full h-2 cursor-pointer flex items-center ease-in-out duration-300`}
              >
                <div className="w-full h-[1px] bg-white">
                  <div
                    className="h-full bg-project-pink"
                    style={{ width: calculateWidth(timelineProgress) }}
                  ></div>
                </div>
              </div>
            </div>
            <svg
              onClick={handleFullScreenClick}
              className={`${
                isPlaying ? "opacity-100" : "opacity-0"
              } mb-1 cursor-pointer ease-in-out duration-300`}
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="27"
                width="10"
                height="2"
                transform="rotate(-90 0 27)"
                fill="white"
              />
              <rect
                x="10"
                y="27"
                width="10"
                height="2"
                transform="rotate(180 10 27)"
                fill="white"
              />
              <rect width="10" height="2" fill="white" />
              <rect
                y="10"
                width="10"
                height="2"
                transform="rotate(-90 0 10)"
                fill="white"
              />
              <rect
                x="29"
                width="10"
                height="2"
                transform="rotate(90 29 0)"
                fill="white"
              />
              <rect x="19" width="10" height="2" fill="white" />
              <rect
                x="29"
                y="27"
                width="10"
                height="2"
                transform="rotate(180 29 27)"
                fill="white"
              />
              <rect
                x="29"
                y="17"
                width="10"
                height="2"
                transform="rotate(90 29 17)"
                fill="white"
              />
            </svg>
          </div>
          {/* <p className=" hidden sm:block text-base lg:text-xl font-bold uppercase">
            Documentary
          </p> */}
        </div>
      </div>
      <div
        className={` absolute top-0 left-0 h-full w-full pointer-events-none ease-in-out duration-700 ${
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
