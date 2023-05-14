import Link from "next/link";
import Image from "next/image";



const Header = () => {
    return ( 
        <header className=" border-2 border-red-600 flex justify-between items-center px-14 h-22">
            {/* <h2>This is the Header all-mighty</h2>
            <Link href="/">Home</Link>
            <Link href="/works">Works</Link> */}
            <img src="/logo-white.png" className=" h-11 w-fit" alt="logo"></img>
            <nav>
                <ul className="flex gap-x-5 uppercase text-base">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/works">Works</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;