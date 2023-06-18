import HeroVideo from "@/components/HeroVideo";
import CategoryGrid from "@/components/CategoryGrid";
import OurTeam from "@/components/OurTeam";
import SliderElement from "@/components/SliderElement";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  const sliderContent = [
    { title: "Drone action", imgUrl: "/nature.png" },
    { title: "Live broadcasting", imgUrl: "/broadcast.png" },
    { title: "Set on site", imgUrl: "/documentary.png" },
    { title: "Contact us", imgUrl: "/our-team.png" },
  ];

  return (
    <main className="flex flex-col gap-y-5 md:gap-y-8">
      <HeroVideo category="none" categoryVideo={false} />
      <CategoryGrid />
      <OurTeam
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        imgUrl="/our-team.png"
      />
      <SliderElement slides={sliderContent} />
      <section className="mx-5 md:mx-14 mb-12 lg:mb-16 lg:grid grid-cols-12">
        <article className=" text-base col-start-4 col-end-10 bg-project-dark-gray text-white p-8 sm:p-12 flex flex-col gap-y-2">
          <ContactCard
            location="Parcul Industrial Sfantu Gheorghe Cart. Campul Frumos nr.5 520072"
            email="contact@blendemproduction.com"
          />
        </article>
      </section>
    </main>
  );
}
