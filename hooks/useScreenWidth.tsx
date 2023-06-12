import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [windowSize, setWindowSize] = useState({
    screenWidth: 0,
    isDesktop: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        screenWidth: window.innerWidth,
        isDesktop: window.innerWidth >= 1023,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useScreenWidth;
