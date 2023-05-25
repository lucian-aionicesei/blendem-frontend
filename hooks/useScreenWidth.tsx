import { useState, useEffect } from "react";

const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(-1);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial screen width
    setScreenWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
