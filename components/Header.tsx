import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    const isActive = (path: string): string => {
        return currentPath === path ? 'border-project-green bg-project-green font-bold' : 'group';
    };

    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        //   setWindowWidth(window.innerWidth);
          if (window.innerWidth > 1023) {
            setToggleMenu(false)
          }
        };
    
        // Set the initial window width
        // setWindowWidth(window.innerWidth);
    
        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function setMenuState ():any {
        setToggleMenu(() => !toggleMenu);
        if (toggleMenu) {
            document.body.style.overflow = "auto";
          } else {
            document.body.style.overflow = "hidden";
          }
    }

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return ( 
        <header className="fixed top-0 w-full h-0">
            <div className={`flex justify-between items-center px-5 md:px-14 h-[5.5rem] z-10 ease-in duration-200 ${(currentPath === "/" && !toggleMenu) ? (isScrolled && 'bg-project-black'): ('bg-project-black')}`}>
                <Link href="/"><img src="/logo-white.png" className=" h-10 w-fit" alt="logo"></img></Link>
                <nav className=" hidden lg:block">
                    <ul className="flex gap-x-7 uppercase text-base items-center">
                        <li className="relative"><Link href="/" className={`block px-4 py-3 ${isActive('/')}`}>Home<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                        <li className="relative"><Link href="/works" className={`block px-4 py-3 ${isActive('/works')}`}>Works<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                        <li className="relative"><Link href="/about" className={`block px-4 py-3 ${isActive('/about')}`}>About<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                        <li className="relative"><Link href="/contact" className={`block px-4 py-3 ${isActive('/contact')}`}>Contact<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                    </ul>
                </nav>
                <div onClick={setMenuState} className="block lg:hidden cursor-pointer py-2">
                    {/* <svg className="w-10 h-fit" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className=" origin-center rotate-45" y="18" x="1" width="38" height="5" fill="white"/>
                        <rect className=" origin-center -rotate-45" y="18" x="-1" width="38" height="5" fill="white"/>
                    </svg> */}
                    <svg className=" w-9 md:w-10 h-fit" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className={ ` ease-in-out duration-300 origin-center ${toggleMenu ? 'translate-y-0 translate-x-0 rotate-45' : '-translate-y-[6px] -translate-x-[1px]'}` } y="18" x="1" width="38" height="5" fill="white"/>
                        <rect className={ ` ease-in-out duration-300 origin-center ${toggleMenu ? 'translate-y-0 translate-x-0 -rotate-45' : 'translate-y-[6px] translate-x-[1px]'}` } y="18" x="-1" width="38" height="5" fill="white"/>
                    </svg>
                </div>
            </div>
            <nav className={`backdrop-blur-md bg-black/30 h-screen w-full ml-auto pb-[5.5rem] ease-in-out duration-500 ${toggleMenu ? 'translate-x-0' : 'translate-x-full'} z-10`}>
                <ul className="px-5 md:px-14 text-7xl h-full flex flex-col justify-center gap-y-10 text-right">
                    <li>
                        <Link className= {`hover:font-bold ${currentPath === "/" && 'font-bold text-project-green'}`} onClick={setMenuState} href="/">Home</Link>
                    </li>
                    <li>
                        <Link className= {`hover:font-bold ${currentPath === "/works" && 'font-bold text-project-green'}`} onClick={setMenuState} href="/works">Works</Link>
                    </li>
                    <li>
                        <Link className= {`hover:font-bold ${currentPath === "/about" && 'font-bold text-project-green'}`} onClick={setMenuState} href="/about">About</Link>
                    </li>
                    <li>
                        <Link className= {`hover:font-bold ${currentPath === "/contact" && 'font-bold text-project-green'}`} onClick={setMenuState} href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;