import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <HeroVideo categoryVideo={false} />
      <CategoryGrid />
    </main>
  );
}
