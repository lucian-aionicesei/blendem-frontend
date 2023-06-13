import Image from "next/image";
import Link from "next/link";
import worldIcon from "../public/world_icon.svg";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { HomePageContext } from "./app-context";

export default function LanguageSelector({
  showOptions,
  setShowOptions,
  navOpen,
  isMobile,
}: {
  showOptions: boolean;
  setShowOptions: Dispatch<SetStateAction<boolean>>;
  navOpen: boolean;
  isMobile?: boolean;
}) {
  const router = useRouter();
  const availableRegions = useContext(HomePageContext);

  return (
    <li
      className={`flex ${
        isMobile
          ? "self-end flex-row-reverse items-center"
          : "self-center flex-col"
      }`}
    >
      <Image
        src={worldIcon}
        className="w-7 cursor-pointer z-10"
        alt="Change language button"
        onClick={function () {
          setShowOptions((s: boolean) => !s);
        }}
      />
      <div
        className={`flex gap-4 text-xl ${
          showOptions
            ? "animate-[slideIn_250ms_ease-in-out_forwards]"
            : "animate-[slideOut_250ms_ease-in-out_forwards]"
        } ${isMobile ? "flex-row mr-4" : "flex-col mt-9 absolute"} ${
          !navOpen && "hidden"
        }`}
      >
        {availableRegions &&
          availableRegions.map((region_code) => (
            <Link key={region_code} href={router.pathname} locale={region_code}>
              {region_code.toUpperCase()}
            </Link>
          ))}
      </div>
    </li>
  );
}
