import { Inter } from "next/font/google";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <main>
      <HeroVideo categoryVideo={false} />
      <img
        className=" h-screen w-full object-cover"
        src="/mtbike.png"
        alt="logo"
      ></img>
      <img
        className=" h-screen w-full object-cover"
        src="/mtbike.png"
        alt="logo"
      ></img>
    </main>
  );
}
