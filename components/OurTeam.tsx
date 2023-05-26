import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="sm:mx-5 md:mx-14 grid grid-cols-12">
      <div className="row-start-1 col-start-2 col-span-6 aspect-video h-fit relative">
        <Image src="/our-team.png" fill={true} alt="our team"></Image>
      </div>
      <div className="row-start-1 col-start-3 col-span-9 w-full h-full bg-project-dark-gray"></div>
      <article className=" col-end-12 col-span-4 row-start-1 flex flex-col justify-center p-10">
        <h1 className=" text-2xl font-bold mb-3">Our team</h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className=" bg-project-green font-bold px-6 py-4 w-fit text-base">
          Read more
        </div>
      </article>
    </section>
  );
};

export default OurTeam;
