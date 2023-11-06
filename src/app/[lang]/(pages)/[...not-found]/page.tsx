"use client";

import { useTranslations } from "next-intl";

export default function LocaleSlugPage() {
  const t = useTranslations();
  return <h1>{t("home")}123 LocaleSlugPage</h1>;
}
