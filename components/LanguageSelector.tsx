import Image from "next/image";
import Link from "next/link";
import worldIcon from "../public/world_icon.svg";
import { Dispatch, SetStateAction } from "react";

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
        <Link href="#">EN</Link>
        <Link href="#">HU</Link>
        <Link href="#">RO</Link>
      </div>
      {/* <li className={` flex  `}>
        <Image
          src={worldIcon}
          className="w-7 cursor-pointer z-10 ml-4"
          alt="Change language button"
          onClick={function () {
            setShowOptions((s) => !s);
          }}
        />
        <div
          className={`${
            showOptions
              ? "animate-[slideIn_250ms_ease-in-out_forwards]"
              : "animate-[slideOut_250ms_ease-in-out_forwards]"
          } flex gap-4 text-xl ${!navOpen && "hidden"}`}
        >
          <Link href="#">EN</Link>
          <Link href="#">HU</Link>
          <Link href="#">RO</Link>
        </div>
      </li> */}
    </li>
  );
}
