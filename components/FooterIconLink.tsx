import Image from "next/image";

interface IconLinkProps {
  url: string;
  alt: string;
  imgSrc: string;
}

const FooterIconLink = ({ url, alt, imgSrc }: IconLinkProps) => {
  return (
    <li className=" w-12 h-12 p-2 pointer-events-none hover:bg-project-green">
      <a
        className="w-full h-full relative flex items-center pointer-events-auto"
        href={url}
      >
        <Image className="static" src={imgSrc} fill={true} alt={alt}></Image>
      </a>
    </li>
  );
};

export default FooterIconLink;
