import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";
import OurTeam from "@/components/OurTeam";
import SliderElement from "@/components/SliderElement";
import ContactCard from "@/components/ContactCard";
import { useRouter } from "next/router";
import { HomeStoryContent } from "@/utils/interfaces";

import { Storyblok, config } from "@/utils/shared";
import { Response } from "@/utils/interfaces";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [homePageContent, setHomePageContent] = useState<
    HomeStoryContent | undefined
  >();

  useEffect(() => {
    Storyblok.get(`cdn/stories`, {
      token: config.token,
      is_startpage: true,
      sort_by: "position:asc",
      filter_query: {
        language_code: {
          in: router.locale,
        },
      },
    })
      .then(async ({ data: { stories } }: Response) => {
        "hero_video" in stories[0].content &&
          setHomePageContent(stories[0].content);
      })
      .catch(() => {
        console.log("error");
      });
  }, [router.locale]);

  return (
    homePageContent && (
      <main className="flex flex-col gap-y-5 md:gap-y-8">
        <HeroVideo
          category="none"
          categoryVideo={false}
          videoURL={homePageContent.hero_video.filename.replace(
            "https://",
            "https://s3.amazonaws.com/"
          )}
        />
        <CategoryGrid />
        <OurTeam
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          imgUrl="/our-team.png"
        />
        <SliderElement slides={homePageContent.slider_images} />
        <ContactCard
          location="Parcul Industrial Sfantu Gheorghe Cart. Campul Frumos nr.5 520072"
          email="contact@blendemproduction.com"
        />
      </main>
    )
  );
}
