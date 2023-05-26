import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-5 md:gap-y-8">
      <HeroVideo categoryVideo={false} />
      <CategoryGrid />
      <OurTeam />
    </main>
  );
}
