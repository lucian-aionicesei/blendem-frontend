import { Parallax } from "react-scroll-parallax";

const TextComponent = () => {
  return (
    <article className="mx-5 md:mx-14 lg:grid grid-cols-12">
      <Parallax className="col-start-2 col-span-5">
        <h2 className=" pb-10 font-semibold mr-5 text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
      </Parallax>
      <Parallax translateY={[15, -10]} className=" col-start-7 col-span-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </Parallax>
    </article>
  );
};

export default TextComponent;
