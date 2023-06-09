import Image from "next/image";

const EmployeesDescription = () => {
  return (
    <section className="sm:mx-5 md:mx-14 mb-12 lg:mb-16 flex flex-wrap items-center justify-around">
      <article className="relative">
        <Image
          src="/portrait.jpeg"
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </article>
    </section>
  );
};

export default EmployeesDescription;
