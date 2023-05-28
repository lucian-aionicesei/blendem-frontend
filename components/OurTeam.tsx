import Image from "next/image";
import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const OurTeam = ({ text, imgUrl }: { text: string; imgUrl: string }) => {
  //   const [videoContainerRef, inView] = useInView({
  //     // threshold: 0.5,
  //     root: null,
  //     rootMargin: "-50% 0% -50% 0%",
  //     // Adjust this threshold value as needed
  //   });
  const [imageElement, inView] = useInView({
    threshold: 0,
    // root: null,
    // rootMargin: "-50% 0% -50% 0%",
    // Adjust this threshold value as needed
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <section className="sm:mx-5 md:mx-14 my-9 sm:my-16 lg:grid grid-cols-12 flex flex-col justify-center">
      <div className="row-start-1 col-start-1 xl:col-start-2 col-span-7 xl:col-span-6 aspect-video h-fit relative z-10">
        <Image
          ref={imageElement}
          src={imgUrl}
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </div>
      <div className=" hidden lg:block row-start-1 col-end-13 xl:col-end-12 col-span-10 xl:col-span-9 w-full h-full bg-project-dark-gray translate-y-10"></div>
      <article className=" bg-project-dark-gray lg:bg-none col-end-13 xl:col-end-12 col-span-5 xl:col-span-4 row-start-1 flex flex-col justify-center px-5 py-7 sm:p-10 lg:translate-y-10">
        <h1 className=" text-2xl font-bold mb-3">Our team</h1>
        <p className="mt-t mb-8 lg:my-5">{text}</p>
        <div className="ml-auto mr-auto lg:ml-auto lg:mr-0 pt-4w">
          <LinkButton path="/about" />
        </div>
      </article>
    </section>
  );
};

export default OurTeam;
