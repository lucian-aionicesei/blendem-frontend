import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

interface EmployeeCardProps {
  imgUrl: string;
  name: string;
  jobTitle: string;
  description: string;
}

const EmployeeCard = ({
  imgUrl,
  name,
  jobTitle,
  description,
}: EmployeeCardProps) => {
  return (
    <article className="w-80 text-base leading-loose font-light">
      <div className="relative aspect-[4/5] w-full mb-9 overflow-hidden">
        <Parallax translateY={[10, -10]} className="w-full h-full">
          <Image
            className=" object-cover w-full h-full scale-110"
            src={imgUrl}
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </Parallax>
      </div>
      <div className="pb-4">
        <h4 className="font-bold">{name}</h4>
        <span>{jobTitle}</span>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default EmployeeCard;
