import Link from "next/link";
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useScreenWidth from '../hooks/useScreenWidth';

type GridVideoProps = {
    videoUrl: string;
    imgUrl: string;
    category: string;
  };

const GridVideo : React.FC<GridVideoProps> = ({ videoUrl, imgUrl, category }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoElement = videoRef.current;
    const [smallScreen, setSmallScreen] = useState(false);
    const screenWidth = useScreenWidth();

    useEffect(() => {
        if (screenWidth < 1024) {
          setSmallScreen(true);
        //   console.log("VIDEO component small")
        } else {
            // console.log("VIDEO component big")
            setPlaying(false);
            setSmallScreen(false);
        }
      }, [screenWidth]);
    
    const handleArticleEnter = (e:any) => {
        // console.log("play the vide")
        if(!smallScreen){
            videoElement?.play();
        }
      };
    
    const handleArticleLeave = (e:any) => {
        // console.log("pause the vide")
        if(!smallScreen){
            videoElement?.pause();
        }
      };

    // Play video when in view

  const [isPlaying, setPlaying] = useState(false);
  const [videoContainerRef, inView] = useInView({
    // threshold: 0.5,
    root: null,
    rootMargin: '-50% 0% -50% 0%',
     // Adjust this threshold value as needed
  });

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && smallScreen) {
      if (inView && videoElement.paused) {
        videoElement.play();
        setPlaying(true);
      } else if (!inView && !videoElement.paused) {
        videoElement.pause();
        setPlaying(false);
      }
    }
  }, [inView]);

    return (
        <article ref={videoContainerRef} onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave} className=" group aspect-video relative flex items-center justify-center overflow-hidden">
                <Link href={`/works/${category}`}><video ref={videoRef} muted loop className=' w-full h-full object-cover' src={videoUrl}></video></Link>
                <section className=" absolute bottom-0 w-full flex lg:hidden justify-between items-center p-5 sm:p-8 overflow-hidden">
                    <p className={`uppercase text-xl sm:text-2xl ease-in-out duration-500 ${isPlaying ? 'translate-y-0 opacity-100': 'translate-y-full opacity-0'}`}>{category}</p>
                    <Link className="border-2 border-project-green sm:py-2 px-2 sm:px-5 text-sm sm:text-base" href={`/works/${category}`}>Watch</Link>
                </section>
                <div className={`pointer-events-none absolute top-0 left-0 h-full w-full ease-in-out duration-500 ${isPlaying ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                    <img className="h-full w-full object-cover" src={imgUrl} alt="documentary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                </div>
                <div className=" pointer-events-none absolute lg:border-2 border-project-green flex items-center justify-center group-hover:border-project-pink group-hover:w-full group-hover:h-full transition-all">
                    <div className="relative overflow-hidden">
                        <h2 className={`uppercase text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl px-6 py-4 ease-in-out duration-500 ${isPlaying ? '-translate-y-full' : 'group-hover:-translate-y-full translate-y-0'}`}>{category}</h2>
                    </div>
                </div>
        </article>
     );
}
 
export default GridVideo;