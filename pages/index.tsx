import Image from "next/image";
import { Inter } from "next/font/google";
import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <HeroVideo categoryVideo={false} />
      <CategoryGrid />
    </main>
  );
}
