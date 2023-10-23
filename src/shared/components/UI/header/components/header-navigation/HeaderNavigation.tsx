"use client";

import { usePathname } from "next/navigation";
import "./HeaderNavigation.style.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getLocale } from "@/middleware";
import useLang from "@/shared/hooks/useLang";

export default function HeaderNavigation() {
  const currentPath = usePathname();
  const currentLang = useLang();

  console.log("HeaderNavigation", currentLang);

  // const t = await getDictionary("ka");
  const t = useTranslations();
  return (
    <nav className="header-store-navigation-menu">
      <ul>
        <li>
          <Link
            href={`/${currentLang}/home`}
            className={
              currentPath === `${currentLang}/home` ? "active-link" : ""
            }
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLang}/store`}
            className={
              currentPath === `${currentLang}/store` ? "active-link" : ""
            }
          >
            {t("store")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLang}/about-us`}
            className={
              currentPath === `/${currentLang}/about-us` ? "active-link" : ""
            }
          >
            {t("about_us")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${currentLang}/contact`}
            className={
              currentPath === `/${currentLang}/contact` ? "active-link" : ""
            }
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
