import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";
import Image from "next/image";
import siteLogo from "../public/logo-white.png";
import HeaderLink from "./HeaderLink";
import LanguageSelector from "./LanguageSelector";
import { Storyblok, config } from "@/utils/shared";
import { Response } from "@/utils/interfaces";

const Header = () => {
  const router = useRouter();
  const currentPath = router.route;
  const { isDesktop } = useScreenWidth();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [availableRegions, setAvailableRegions] = useState<string[] | null>(
    null
  );

  useEffect(() => {
    Storyblok.get(`cdn/stories`, {
      token: config.token,
      is_startpage: true,
      sort_by: "position:asc",
    })
      .then(async ({ data: { stories } }: Response) => {
        setAvailableRegions(stories.map(({ slug }) => slug));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNavOpen((prev) => !prev);
    }, 200);
  }, [showOptions]);

  useEffect(() => {
    const handleRouteChange = () => {
      setToggleMenu(false);
      setShowOptions(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (isDesktop) {
      setToggleMenu(false);
      document.body.style.overflow = "auto";
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!toggleMenu) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [toggleMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
      setShowOptions(false);

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function setMenuState() {
    setToggleMenu(() => !toggleMenu);
  }

  return (
    <header className="fixed top-0 w-full h-0 z-50">
      <div
        className={`flex justify-between items-center px-5 md:px-14 h-20 z-10 ease-in-out duration-300 ${
          (currentPath === "/" || currentPath === "/works/[slug]") &&
          !toggleMenu
            ? isScrolled && "bg-project-black"
            : "bg-project-black"
        }`}
      >
        <Link
          onClick={() => {
            setToggleMenu(false);
            document.body.style.overflow = "auto";
          }}
          href="/"
        >
          <Image
            src={siteLogo}
            width={414}
            height={85}
            className=" h-8 sm:h-10 w-auto"
            alt="logo"
            priority={true}
          ></Image>
        </Link>
        {isDesktop && (
          <nav className=" hidden lg:block">
            <ul className="flex gap-x-7 uppercase text-base items-center">
              <HeaderLink path="/" name="Home" />
              <HeaderLink path="/works" name="Works" />
              <HeaderLink path="/about" name="About" />
              <HeaderLink path="/contact" name="Contact" />
              {availableRegions && (
                <LanguageSelector
                  navOpen={navOpen}
                  setShowOptions={setShowOptions}
                  showOptions={showOptions}
                  availableRegions={availableRegions}
                />
              )}
            </ul>
          </nav>
        )}
        {!isDesktop && (
          <div
            onClick={setMenuState}
            className="block lg:hidden cursor-pointer py-2"
          >
            <svg
              className="w-9 md:w-10 h-fit"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={`ease-in-out duration-300 origin-center ${
                  toggleMenu
                    ? "translate-y-0 translate-x-0 rotate-45"
                    : "-translate-y-[6px] -translate-x-[1px]"
                }`}
                y="18"
                x="1"
                width="38"
                height="5"
                fill="white"
              />
              <rect
                className={`ease-in-out duration-300 origin-center ${
                  toggleMenu
                    ? "translate-y-0 translate-x-0 -rotate-45"
                    : "translate-y-[6px] translate-x-[1px]"
                }`}
                y="18"
                x="-1"
                width="38"
                height="5"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      {!isDesktop && (
        <nav
          className={`backdrop-blur-md bg-black/30 h-screen w-full ml-auto pb-20 ease-in-out duration-500 ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          } z-10`}
        >
          <ul className="px-5 md:px-14 text-7xl h-full flex flex-col justify-center gap-y-10 text-right">
            <HeaderLink
              path="/"
              name="Home"
              setMenuState={setMenuState}
              burgerMenu={true}
            />
            <HeaderLink
              path="/works"
              name="Works"
              setMenuState={setMenuState}
              burgerMenu={true}
            />
            <HeaderLink
              path="/about"
              name="About"
              setMenuState={setMenuState}
              burgerMenu={true}
            />
            <HeaderLink
              path="/contact"
              name="Contact"
              setMenuState={setMenuState}
              burgerMenu={true}
            />

            {availableRegions && (
              <LanguageSelector
                navOpen={navOpen}
                setShowOptions={setShowOptions}
                showOptions={showOptions}
                isMobile={true}
                availableRegions={availableRegions}
              />
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
