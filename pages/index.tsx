import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // asdsa
  return (
    <main>
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
