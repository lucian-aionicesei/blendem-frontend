import HeroVideo from "@/components/HeroVideo";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const currentPath = router.query.slug;
  // console.log(router.route);

  return (
    <main>
      <HeroVideo categoryVideo={true} />
      <h1 className="text-5xl">{currentPath}</h1>
      <div className="h-screen w-full"></div>
    </main>
  );
}
