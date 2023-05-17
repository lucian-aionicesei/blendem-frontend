import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css"
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    // console.log(currentPath);

    const isActive = (path: string): string => {
        return currentPath === path ? 'border-project-green bg-project-green font-bold' : `${styles.expand}`;
    };

    return ( 
        <header className="  flex justify-between items-center px-14 h-22">
            {/* <h2>This is the Header all-mighty</h2>
            <Link href="/">Home</Link>
            <Link href="/works">Works</Link> */}
            <img src="/logo-white.png" className=" h-11 w-fit" alt="logo"></img>
            <nav>
                <ul className="flex gap-x-7 uppercase text-base items-center">
                    <li className="relative flex items-end justify-center"><Link className={`px-4 py-3 z-10 ${isActive('/')}`} href="/">Home</Link><div className="absolute border-2 border-project-green pointer-events-none z-0"></div></li>
                    <li className="relative flex items-end justify-center"><Link className={`px-4 py-3 z-10 ${isActive('/works')}`} href="/works">Works</Link><div className="absolute border-2 border-project-green pointer-events-none z-0"></div></li>
                    <li className="relative flex items-end justify-center"><Link className={`px-4 py-3 z-10 ${isActive('/about')}`} href="/about">About</Link><div className="absolute border-2 border-project-green pointer-events-none z-0"></div></li>
                    <li className="relative flex items-end justify-center"><Link className={`px-4 py-3 z-10 ${isActive('/contact')}`} href="/contact">Contact</Link><div className="absolute border-2 border-project-green pointer-events-none z-0"></div></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;