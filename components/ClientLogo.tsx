import Image from "next/image";

const ClientLogo = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <li className="group relative ease-out duration-300">
      <Image
        src={imgUrl}
        width={414}
        height={85}
        className=" h-16 w-auto group-hover:scale-125 ease-out duration-200"
        alt={name}
        priority={true}
      ></Image>
    </li>
  );
};

export default ClientLogo;
