import HeroVideo from "@/components/HeroVideo";
import { useRouter } from "next/router";
import SliderElement from "@/components/SliderElement";
import ProjectVideo from "@/components/ProjectVideo";
import TextComponent from "@/components/TextComponent";

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
      <section className="2xl:container mx-auto my-16 md:my-24 lg:my-32">
        <TextComponent
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          textCol1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
        />
      </section>
      {projects.map((project) => (
        <ProjectVideo
          key={project.title}
          videoUrl={project.videoUrl}
          imgUrl={project.imgUrl}
          title={project.title}
        />
      ))}
      <SliderElement slides={sliderContent} />
      <section className="2xl:container mx-auto my-16 lg:my-24">
        <TextComponent
          textCol1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
        />
      </section>
    </main>
  );
}
