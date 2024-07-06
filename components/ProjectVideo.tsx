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
  const [isMuted, setIsMuted] = useState(false);

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
      setIsMuted(false);
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
    if (videoElement) {
      if (isMuted) {
        videoElement.muted = true;
      } else {
        videoElement.muted = false;
      }
    }
  }, [isMuted, videoElement]);

  useEffect(() => {
    if (fullScreen && videoElement) {
      setIsMuted(false);
      videoElement.currentTime = 0;
      setTimelineProgress(0);
      document.body.style.overflow = "hidden";
    } else if (!fullScreen && videoElement) {
      setIsMuted(true);
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
            <div className="flex items-center gap-x-4 sm:gap-x-6">
              {fullScreen &&
                (!isMuted ? (
                  <svg
                    onClick={() => {
                      setIsMuted(true);
                    }}
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_934_209" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.49514 17.2373H2C0.89543 17.2373 0 16.3419 0 15.2373V7.88953C0 6.78496 0.895431 5.88953 2 5.88953H7.57777L13.3723 1.21709C14.0264 0.689622 15 1.15523 15 1.99553V22.0043C15 22.8446 14.0264 23.3102 13.3723 22.7827L6.49514 17.2373Z"
                      />
                    </mask>
                    <path
                      d="M6.49514 17.2373L7.75056 15.6804L7.20105 15.2373H6.49514V17.2373ZM7.57777 5.88953V7.88953H8.28368L8.83319 7.44643L7.57777 5.88953ZM13.3723 1.21709L14.6277 2.77399V2.77399L13.3723 1.21709ZM13.3723 22.7827L14.6277 21.2258L13.3723 22.7827ZM6.49514 15.2373H2V19.2373H6.49514V15.2373ZM2 15.2373H2H-2C-2 17.4464 -0.209139 19.2373 2 19.2373V15.2373ZM2 15.2373V7.88953H-2V15.2373H2ZM2 7.88953V7.88953V3.88953C-0.209138 3.88953 -2 5.68039 -2 7.88953H2ZM2 7.88953H7.57777V3.88953H2V7.88953ZM8.83319 7.44643L14.6277 2.77399L12.1169 -0.339811L6.32236 4.33263L8.83319 7.44643ZM14.6277 2.77399C13.9736 3.30144 13 2.83585 13 1.99553H17C17 -0.525391 14.0793 -1.9222 12.1169 -0.339811L14.6277 2.77399ZM13 1.99553V22.0043H17V1.99553H13ZM13 22.0043C13 21.164 13.9736 20.6984 14.6277 21.2258L12.1169 24.3396C14.0793 25.922 17 24.5252 17 22.0043H13ZM14.6277 21.2258L7.75056 15.6804L5.23973 18.7942L12.1169 24.3396L14.6277 21.2258Z"
                      fill="white"
                      mask="url(#path-1-inside-1_934_209)"
                    />
                    <path
                      d="M22.6923 22.231C26.1752 18.6062 31.0513 9.28537 22.6923 1.00019"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18.9999 19.4614C21.7862 16.7823 25.6871 9.89295 18.9999 3.76912"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => {
                      setIsMuted(false);
                    }}
                    width="28"
                    height="23"
                    viewBox="0 0 28 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_934_208" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.49514 16.2437H2C0.89543 16.2437 0 15.3482 0 14.2437V6.89588C0 5.79131 0.895431 4.89588 2 4.89588H7.57777L13.3723 0.223435C14.0264 -0.30403 15 0.161578 15 1.00188V21.0106C15 21.8509 14.0264 22.3165 13.3723 21.7891L6.49514 16.2437Z"
                      />
                    </mask>
                    <path
                      d="M6.49514 16.2437L7.75056 14.6868L7.20104 14.2437H6.49514V16.2437ZM7.57777 4.89588V6.89588H8.28368L8.83319 6.45278L7.57777 4.89588ZM13.3723 0.223435L14.6277 1.78033L14.6277 1.78033L13.3723 0.223435ZM13.3723 21.7891L14.6277 20.2322L14.6277 20.2322L13.3723 21.7891ZM6.49514 14.2437H2V18.2437H6.49514V14.2437ZM2 14.2437H2H-2C-2 16.4528 -0.209139 18.2437 2 18.2437V14.2437ZM2 14.2437V6.89588H-2V14.2437H2ZM2 6.89588V6.89588V2.89588C-0.209138 2.89588 -2 4.68674 -2 6.89588H2ZM2 6.89588H7.57777V2.89588H2V6.89588ZM8.83319 6.45278L14.6277 1.78033L12.1169 -1.33346L6.32236 3.33898L8.83319 6.45278ZM14.6277 1.78033C13.9736 2.30779 13 1.8422 13 1.00188H17C17 -1.51904 14.0793 -2.91585 12.1169 -1.33346L14.6277 1.78033ZM13 1.00188V21.0106H17V1.00188H13ZM13 21.0106C13 20.1703 13.9736 19.7047 14.6277 20.2322L12.1169 23.346C14.0793 24.9284 17 23.5315 17 21.0106H13ZM14.6277 20.2322L7.75056 14.6868L5.23973 17.8006L12.1169 23.346L14.6277 20.2322Z"
                      fill="white"
                      mask="url(#path-1-inside-1_934_208)"
                    />
                    <path
                      d="M19 6L27 15"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19 15L27 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                ))}
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
