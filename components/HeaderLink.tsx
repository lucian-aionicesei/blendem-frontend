import Link from "next/link"
import { useRouter } from 'next/router';

interface MyComponentProps {
    path: string;
    name: string;
    burgerMenu?: boolean;
    setMenuState?: () => void;
  }

const HeaderLink = ({ path, name, burgerMenu = false, setMenuState }: MyComponentProps) => {
    const router = useRouter();
    const currentPath = router.pathname;

    const isActive = currentPath === path ? "border-project-green bg-project-green font-bold" : "group";

    return (<>{!burgerMenu ? 
    <li className="relative"><Link href={path} className={`block px-4 py-3 ${isActive}`}>{name}<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li> : <li><Link className= {`hover:font-bold ${currentPath === path && 'font-bold text-project-green'}`} onClick={setMenuState} href={path}>{name}</Link></li>}
    </>
    );
}
 
export default HeaderLink;