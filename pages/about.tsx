import EmployeesDescription from "@/components/EmployeesDescription";
import HeroImage from "@/components/HeroImage";
import LogosComponent from "@/components/LogosComponent";
import SliderElement from "@/components/SliderElement";
import TextComponent from "@/components/TextComponent";

const About = () => {
  const sliderContent = [
    { title: "Drone action", imgUrl: "/nature.png" },
    { title: "Live broadcasting", imgUrl: "/broadcast.png" },
    { title: "Set on site", imgUrl: "/documentary.png" },
    { title: "Contact us", imgUrl: "/our-team.png" },
  ];

  const employeesArray = [
    {
      imgUrl: "/portrait.jpeg",
      name: "Lucian Aionicesei",
      jobTitle: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imgUrl: "/portrait.jpeg",
      name: "Erzsebet Balint",
      jobTitle: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imgUrl: "/portrait.jpeg",
      name: "George Nicolae",
      jobTitle: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const partnersLogo = [
    { imgUrl: "/logos/netflix.png", name: "Partner logo" },
    { imgUrl: "/logos/volvo.png", name: "Partner logo" },
    { imgUrl: "/logos/coca-cola.png", name: "Partner logo" },
    { imgUrl: "/logos/lego.png", name: "Partner logo" },
    { imgUrl: "/logos/netflix.png", name: "Partner logo" },
    { imgUrl: "/logos/volvo.png", name: "Partner logo" },
    { imgUrl: "/logos/coca-cola.png", name: "Partner logo" },
    { imgUrl: "/logos/lego.png", name: "Partner logo" },
    { imgUrl: "/logos/netflix.png", name: "Partner logo" },
    { imgUrl: "/logos/volvo.png", name: "Partner logo" },
    { imgUrl: "/logos/coca-cola.png", name: "Partner logo" },
    { imgUrl: "/logos/lego.png", name: "Partner logo" },
    { imgUrl: "/logos/netflix.png", name: "Partner logo" },
    { imgUrl: "/logos/volvo.png", name: "Partner logo" },
    { imgUrl: "/logos/coca-cola.png", name: "Partner logo" },
    { imgUrl: "/logos/lego.png", name: "Partner logo" },
    { imgUrl: "/logos/netflix.png", name: "Partner logo" },
    { imgUrl: "/logos/volvo.png", name: "Partner logo" },
  ];

  return (
    <main className="pt-20 2xl:pt-0">
      <figure className="relative aspect-video md:aspect-[2/1] sm:mx-5 md:mx-14 mb-12 lg:mb-16">
        <HeroImage></HeroImage>
      </figure>
      <section className="2xl:container mx-auto my-14 md:my-24 lg:my-32">
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
      <EmployeesDescription employees={employeesArray} />
      <SliderElement slides={sliderContent} />
      <section className="2xl:container mx-auto my-16 lg:my-24">
        <TextComponent textCol1="We were pleased to work on exciting projects dealing with various content types. Boelow we have some of the companies we've worked with" />
      </section>
      <LogosComponent partnersLogo={partnersLogo} />
    </main>
  );
};

export default About;
