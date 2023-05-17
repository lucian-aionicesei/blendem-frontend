import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    // console.log(currentPath);

    const isActive = (path: string): string => {
        return currentPath === path ? 'border-project-green bg-project-green font-bold' : 'group';
    };

    return ( 
        <header className="  flex justify-between items-center px-14 h-22">
            {/* <h2>This is the Header all-mighty</h2>
            <Link href="/">Home</Link>
            <Link href="/works">Works</Link> */}
            <img src="/logo-white.png" className=" h-11 w-fit" alt="logo"></img>
            <nav>
                <ul className="flex gap-x-7 uppercase text-base items-center">
                    <li className="relative"><Link href="/" className={`block px-4 py-3 ${isActive('/')}`}>Home<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                    <li className="relative"><Link href="/works" className={`block px-4 py-3 ${isActive('/works')}`}>Works<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                    <li className="relative"><Link href="/about" className={`block px-4 py-3 ${isActive('/about')}`}>About<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                    <li className="relative"><Link href="/contact" className={`block px-4 py-3 ${isActive('/contact')}`}>Contact<span className="absolute left-1/2 bottom-0 border-b-2 w-0 border-project-green transition-all duration-300 ease-in-out group-hover:w-full transform -translate-x-1/2"></span></Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;