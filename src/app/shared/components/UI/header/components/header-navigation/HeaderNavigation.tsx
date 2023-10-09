import "./HeaderNavigation.scss";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <nav className="header-store-navigation-menu">
      <ul>
        <li>
          <Link href={"home"}>Home</Link>
        </li>
        <li>
          <Link href={"shop"}>Store</Link>
        </li>
        <li>
          <Link href={"about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={"home"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
