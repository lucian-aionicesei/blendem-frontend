import Link from "next/link";

const LinkButton = ({ path }: { path: string }) => {
  return (
    <Link
      href={path}
      className=" group bg-project-green font-semibold w-fit text-base relative flex flex-row overflow-hidden"
    >
      <span className="px-5 py-[0.85rem] group-hover:-translate-y-full ease-in-out duration-500">
        Read more
      </span>
      <span className="px-5 py-[0.85rem] absolute translate-y-full group-hover:translate-y-0 ease-in-out duration-500">
        Read more
      </span>
    </Link>
  );
};

export default LinkButton;
