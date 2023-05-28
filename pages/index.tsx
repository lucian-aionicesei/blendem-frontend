import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";
import OurTeam from "@/components/OurTeam";
import { useEffect } from "react";
import { Storyblok, config } from "@/utils/shared";
import { Response } from "@/utils/interfaces";

export default function Home() {
  useEffect(() => {
    Storyblok.get(`cdn/stories`, {
      token: config.token,
    }).then(async ({ data: { stories } }: Response) => {
      console.log(stories);
    });
  }, []);

  return (
    <main className="flex flex-col gap-y-5 md:gap-y-8">
      <HeroVideo categoryVideo={false} />
      <CategoryGrid />
      <OurTeam
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        imgUrl="/our-team.png"
      />
      <div className="w-full h-screen bg-black"></div>
    </main>
  );
}
