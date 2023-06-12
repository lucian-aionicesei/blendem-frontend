import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderLinkProps {
  path: string;
  name: string;
  burgerMenu?: boolean;
  setMenuState?: () => void;
}

const HeaderLink = ({
  path,
  name,
  burgerMenu = false,
  setMenuState,
}: HeaderLinkProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive =
    currentPath === path || currentPath.includes(`${path}/[slug]`)
      ? "border-project-green bg-project-green font-semibold"
      : "group";

  return (
    <>
      {!burgerMenu ? (
        <li className={`relative group overflow-hidden ${isActive}`}>
          <Link href={path}>
            <span className="block px-4 py-3 ease-in-out duration-500 group-hover:-translate-y-full">
              {name}
            </span>
            <span className="block px-4 py-3 absolute group-hover:-translate-y-full ease-in-out duration-500">
              {name}
            </span>
            <span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span>
          </Link>
        </li>
      ) : (
        <li>
          <Link
            className={`hover:font-extrabold ${
              (currentPath === path ||
                currentPath.includes(`${path}/[slug]`)) &&
              "font-extrabold text-project-green"
            }`}
            onClick={setMenuState}
            href={path}
          >
            {name}
          </Link>
        </li>
      )}
    </>
  );
};

export default HeaderLink;
