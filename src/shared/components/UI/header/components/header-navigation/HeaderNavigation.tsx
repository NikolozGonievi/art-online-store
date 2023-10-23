"use client";

import { usePathname } from "next/navigation";
import "./HeaderNavigation.style.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeaderNavigation() {
  const currentPath = usePathname();

  // const t = await getDictionary("ka");
  const t = useTranslations();
  return (
    <nav className="header-store-navigation-menu">
      <ul>
        <li>
          <Link
            href={"/home"}
            className={currentPath === "/home" ? "active-link" : ""}
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            href={"/store"}
            className={currentPath === "/shop" ? "active-link" : ""}
          >
            {t("store")}
          </Link>
        </li>
        <li>
          <Link
            href={"about-us"}
            className={currentPath === "/about-us" ? "active-link" : ""}
          >
            {t("about_us")}
          </Link>
        </li>
        <li>
          <Link
            href={"contact"}
            className={currentPath === "/contact" ? "active-link" : ""}
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
