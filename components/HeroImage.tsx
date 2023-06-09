import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      className="object-cover w-full h-auto"
      src="/our-team.png"
      fill={true}
      sizes="(min-width: 1023px) 50vw, 100vw"
      alt="our team"
    />
  );
};

export default HeroImage;
