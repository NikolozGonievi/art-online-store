import { usePathname } from "next/navigation";
import { locales } from "@/middleware";

export default function useLang() {
  const currentPath = usePathname();

  const activeLocale = locales.find(
    (locale) =>
      currentPath.startsWith(`/${locale}/`) || currentPath === `/${locale}`
  );

  // return activeLocale /* ?? defaultLocale */;

  return activeLocale;
}
