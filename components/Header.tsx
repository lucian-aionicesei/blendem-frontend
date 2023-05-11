import Link from "next/link";

const Header = () => {
    return ( 
        <header>
            <h2>This is the Header all-mighty</h2>
            <Link href="/">Home</Link>
            <Link href="/works">Works</Link>
        </header>
     );
}
 
export default Header;