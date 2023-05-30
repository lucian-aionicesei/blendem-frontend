import Link from "next/link";
import { useRouter } from "next/router";

const FooterLink = ({ path, name }: { path: string; name: string }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <li
      className={`${
        currentPath === path || currentPath.includes(`${path}/[slug]`)
          ? " font-semibold"
          : "hover:border-white font-light"
      } border-b-[1px] border-transparent  h-[18px]`}
    >
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default FooterLink;
