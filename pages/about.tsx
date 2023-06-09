import HeroImage from "@/components/HeroImage";
import SliderElement from "@/components/SliderElement";
import TextComponent from "@/components/TextCoponent";

const About = () => {
  const sliderContent = [
    { title: "Drone action", imgUrl: "/nature.png" },
    { title: "Live broadcasting", imgUrl: "/broadcast.png" },
    { title: "Set on site", imgUrl: "/documentary.png" },
    { title: "Contact us", imgUrl: "/our-team.png" },
  ];

  return (
    <main className="pt-20 2xl:pt-0">
      <figure className="relative aspect-video md:aspect-[2/1] sm:mx-5 md:mx-14 mb-12 lg:mb-16">
        <HeroImage></HeroImage>
      </figure>
      <section className="2xl:container mx-auto my-24 lg:my-32">
        <TextComponent />
      </section>
      <SliderElement slides={sliderContent} />
    </main>
  );
};

export default About;
