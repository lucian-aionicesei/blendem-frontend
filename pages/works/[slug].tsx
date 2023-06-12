import HeroVideo from "@/components/HeroVideo";
import { useRouter } from "next/router";
import SliderElement from "@/components/SliderElement";
import ProjectVideo from "@/components/ProjectVideo";

export default function Category() {
  const router = useRouter();
  const currentPath = router.query.slug;

  const sliderContent = [
    { title: "Drone action", imgUrl: "/nature.png" },
    { title: "Live broadcasting", imgUrl: "/broadcast.png" },
    { title: "Set on site", imgUrl: "/documentary.png" },
    { imgUrl: "/our-team.png" },
  ];

  const projects = [
    {
      videoUrl: "/videos/Culture_15sec.mp4",
      imgUrl: "/culture.png",
      title: "Modern art demo - Cluj",
    },
    {
      videoUrl: "/videos/royal.mp4",
      imgUrl: "/creative.png",
      title: "Cooper commercial",
    },
    {
      videoUrl: "/videos/Nature_15sec.mp4",
      imgUrl: "/nature.png",
      title: "Eager travellers",
    },
  ];

  return (
    <main>
      <HeroVideo category={`${currentPath}`} categoryVideo={true} />
      <h1 className="text-5xl">{currentPath}</h1>
      {projects.map((project) => (
        <ProjectVideo
          key={project.title}
          videoUrl={project.videoUrl}
          imgUrl={project.imgUrl}
          title={project.title}
        />
      ))}
      <SliderElement slides={sliderContent} />
    </main>
  );
}
