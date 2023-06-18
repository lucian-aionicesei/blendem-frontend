import { Parallax } from "react-scroll-parallax";

interface TextComponentProps {
  title?: string;
  textCol1: string;
  textCol2?: string;
}

const TextComponent = ({ title, textCol1, textCol2 }: TextComponentProps) => {
  return (
    <article className="mx-5 md:mx-14 lg:grid grid-cols-12">
      {title ? (
        <h2 className="col-start-2 col-span-5 pb-5 lg:pb-10 font-semibold mr-5 text-2xl lg:text-3xl">
          {title}
        </h2>
      ) : textCol2 ? (
        <p className="col-start-2 col-span-4">{textCol1}</p>
      ) : (
        <p className="col-start-2 col-span-5">{textCol1}</p>
      )}
      {title ? (
        <Parallax translateY={[15, -10]} className=" col-start-7 col-span-4">
          <p>{textCol1}</p>
        </Parallax>
      ) : (
        textCol2 && <p className=" col-start-7 col-span-4">{textCol2}</p>
      )}
    </article>
  );
};

export default TextComponent;
