import HeroVideo from "@/components/HeroVideo";
import { useRouter } from "next/router";
import SliderElement from "@/components/SliderElement";
import ProjectVideo from "@/components/ProjectVideo";

export default function Category() {
  const router = useRouter();
  const currentPath = router.query.slug;
  // console.log(currentPath);

  const sliderContent = [
    { title: "Drone action", imgUrl: "/nature.png" },
    { title: "Live broadcasting", imgUrl: "/broadcast.png" },
    { title: "Set on site", imgUrl: "/documentary.png" },
    { imgUrl: "/our-team.png" },
  ];

  return (
    <main>
      <HeroVideo category={`${currentPath}`} categoryVideo={true} />
      <h1 className="text-5xl">{currentPath}</h1>
      <ProjectVideo />
      <ProjectVideo />
      <ProjectVideo />
      <SliderElement slides={sliderContent} />
    </main>
  );
}
