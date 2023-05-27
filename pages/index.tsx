import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";
import OurTeam from "@/components/OurTeam";

export default function Home() {
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
    </main>
  );
}
