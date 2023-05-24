import Link from "next/link"
import { useRouter } from 'next/router';

interface MyComponentProps {
    path: string;
    name: string;
    burgerMenu?: boolean;
    setMenuState?: () => void;
  }

const HeaderLink: React.FC<MyComponentProps> = ({ path, name, burgerMenu = false, setMenuState }) => {
    const router = useRouter();
    const currentPath = router.pathname;

    const isActive = () => {
        return currentPath === path ? "border-project-green bg-project-green font-bold" : "group";
    };

    return (<>{!burgerMenu ? 
        <li className={`relative group overflow-hidden ${isActive()}`}><Link href={path} className="block px-4 py-3 ease-in-out duration-300 group-hover:-translate-y-full">{name}</Link><Link href={path} className="block px-4 py-3 absolute group-hover:-translate-y-full ease-in-out duration-300">{name}</Link><span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></li> : <li><Link className= {`hover:font-bold ${currentPath === path && 'font-bold text-project-green'}`} onClick={setMenuState} href={path}>{name}</Link></li>}
        {/* <li>
            <Link className= {`hover:font-bold ${(currentPath === "/works" || currentPath === "/works/[slug]") && 'font-bold text-project-green'}`} onClick={setMenuState} href="/works">Works</Link>
        </li> */}
    </>
    );
}
 
export default HeaderLink;