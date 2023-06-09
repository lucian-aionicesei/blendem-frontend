import Image from "next/image";
import LinkButton from "./LinkButton";
import { Parallax } from "react-scroll-parallax";

const OurTeam = ({ text, imgUrl }: { text: string; imgUrl: string }) => {
  return (
    <section className="bg-project-dark-gray lg:bg-transparent sm:mx-5 md:mx-14 mb-12 md:mb-16 lg:mb-24 lg:grid grid-cols-12 flex flex-col justify-center">
      <Parallax
        translateY={[5, -5]}
        className="row-start-1 col-start-1 xl:col-start-2 col-span-7 xl:col-span-6 aspect-video relative z-10"
      >
        <Image
          src={imgUrl}
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </Parallax>
      <div className=" hidden lg:block row-start-1 col-end-13 xl:col-end-12 col-span-10 xl:col-span-9 w-full h-full bg-project-dark-gray translate-y-10"></div>
      <Parallax
        translateY={[-5, 5]}
        className="col-end-13 xl:col-end-12 col-span-5 xl:col-span-4 row-start-1"
      >
        <article className=" flex flex-col justify-center px-5 py-10 sm:p-10 lg:translate-y-10">
          <h1 className=" text-xl sm:text-2xl font-semibold mb-3">Our team</h1>
          <p className="mt-t mb-8 lg:my-5">{text}</p>
          <div className="ml-auto mr-auto lg:ml-auto lg:mr-0 pt-4w">
            <LinkButton path="/about" />
          </div>
        </article>
      </Parallax>
    </section>
  );
};

export default OurTeam;
