import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </nav>
    );
}


export default Nav;