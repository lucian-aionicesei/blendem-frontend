import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface ProjectVideoProps {
  videoUrl: string;
  imgUrl: string;
  title: string;
}

const ProjectVideo: React.FC<ProjectVideoProps> = ({
  videoUrl,
  imgUrl,
  title,
}) => {
  const projectVideo = useRef<HTMLVideoElement | null>(null);
  const videoElement = projectVideo.current;
  const [isPlaying, setPlaying] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const [videoContainerRef, inView] = useInView({
    root: null,
    rootMargin: "-45% 0% -55% 0%",
  });

  const calculateWidth = (progress: number) => {
    return `${progress * 100}%`;
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoElement) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      const clickPositionX = event.clientX - progressBarRect.left;
      const progressBarWidth = progressBarRect.width;
      const progress = clickPositionX / progressBarWidth;
      const videoDuration = videoElement.duration;
      const newTimelineProgress = progress * videoDuration;
      videoElement.currentTime = newTimelineProgress;
      setTimelineProgress(newTimelineProgress / videoDuration);
    }
  };

  const handleFullScreenClick = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
      videoElement.muted = false;
      videoElement.currentTime = 0;
      setTimelineProgress(0);
    }
  };

  const handleFullScreenChange = () => {
    const isVideoFullScreen =
      document.fullscreenElement === videoElement ||
      (document as any).mozFullScreenElement === videoElement ||
      (document as any).webkitFullscreenElement === videoElement ||
      (document as any).msFullscreenElement === videoElement;

    setFullScreen(isVideoFullScreen);
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
    if (videoElement) {
      if (inView && videoElement.paused) {
        videoElement.play();
        setPlaying(true);
      } else if (!inView && !videoElement.paused) {
        videoElement.pause();
        setPlaying(false);
      }
    }
  }, [inView, videoElement]);

  useEffect(() => {
    if (videoElement) {
      if (isPlaying) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying, videoElement]);

  useEffect(() => {
    if (fullScreen && videoElement) {
      videoElement.muted = false;
      videoElement.currentTime = 0;
      setTimelineProgress(0);
      document.body.style.overflow = "hidden";
    } else if (!fullScreen && videoElement) {
      videoElement.muted = true;
      document.body.style.overflow = "auto";
    }
  }, [fullScreen, videoElement]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  });

  return (
    <section
      className={`${
        fullScreen
          ? "top-0 left-0 fixed z-50 w-full h-full bg-project-black"
          : "relative sm:mx-5 md:mx-14 h-fit"
      }  box-border overflow-hidden py-2 sm:py-12 xl:py-16 aspect-[5/4] sm:aspect-video lg:aspect-[2/1] flex flex-col items-center justify-center`}
    >
      <div ref={videoContainerRef} className=" w-full h-full"></div>
      <div className="absolute aspect-[5/4] sm:aspect-video lg:aspect-[2/1] w-full flex items-center justify-center">
        <video
          onDoubleClick={handleFullScreenClick}
          onClick={() => {
            fullScreen && setPlaying(!isPlaying);
          }}
          className=" object-cover h-full w-auto sm:h-auto sm:w-full "
          muted
          loop
          ref={projectVideo}
          src={videoUrl}
        ></video>
      </div>
      <div className="videoControls absolute bottom-0 left-0 w-full z-30 ">
        <div
          className={`${
            (isPlaying || fullScreen) && "bg-gradient-to-t"
          } w-full h-20 sm:h-24 lg:h-32 from-black/60 px-5 sm:px-10 flex flex-col justify-center`}
        >
          <div className="flex w-full gap-x-5 sm:gap-x-10 items-end">
            <div className="flex-grow flex flex-col gap-y-2">
              <span className=" text-xl md:text-2xl lg:text-3xl font-bold">
                {title}
              </span>
              <div
                onClick={handleProgressBarClick}
                onMouseUp={handleProgressBarClick}
                ref={progressBarRef}
                className={`${
                  isPlaying || fullScreen ? "opacity-100" : "opacity-0"
                } w-full h-2 cursor-pointer flex items-center ease-in-out duration-300`}
              >
                <div className="w-full h-[2px] bg-white">
                  <div
                    className="h-full bg-project-pink"
                    style={{ width: calculateWidth(timelineProgress) }}
                  ></div>
                </div>
              </div>
            </div>
            {fullScreen ? (
              <svg
                onClick={() => {
                  setFullScreen(false);
                }}
                className={`mb-1 cursor-pointer hover:scale-110 duration-100 ease-in-out`}
                width="29"
                height="27"
                viewBox="0 0 29 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="17"
                  width="10"
                  height="2"
                  transform="rotate(90 10 17)"
                  fill="white"
                />
                <rect
                  x="-6.10352e-05"
                  y="17"
                  width="10"
                  height="2"
                  fill="white"
                />
                <rect
                  x="10"
                  y="10"
                  width="10"
                  height="2"
                  transform="rotate(-180 10 10)"
                  fill="white"
                />
                <rect
                  x="10"
                  width="10"
                  height="2"
                  transform="rotate(90 10 0)"
                  fill="white"
                />
                <rect
                  x="19"
                  y="10"
                  width="10"
                  height="2"
                  transform="rotate(-90 19 10)"
                  fill="white"
                />
                <rect
                  x="29.0001"
                  y="10"
                  width="10"
                  height="2"
                  transform="rotate(180 29.0001 10)"
                  fill="white"
                />
                <rect x="19" y="17" width="10" height="2" fill="white" />
                <rect
                  x="19"
                  y="27"
                  width="10"
                  height="2"
                  transform="rotate(-90 19 27)"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setFullScreen(true);
                }}
                className={`${
                  isPlaying ? "opacity-100" : "opacity-0"
                }  mb-1 cursor-pointer hover:scale-110 ease-in-out duration-100`}
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
            )}
          </div>
        </div>
      </div>
      <div
        className={` absolute top-0 left-0 h-full w-full pointer-events-none ease-in-out duration-700 ${
          isPlaying || fullScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          className="object-cover"
          src={imgUrl}
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
