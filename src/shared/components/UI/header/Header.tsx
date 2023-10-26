import React from "react";

import "./Header.style.scss";
import HotNewsBanner from "./components/hot-news-banner/HotNewsBanner";
import StoreTitle from "./components/store-title/StoreTitle";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import HeaderSocialMediaWrapper from "./components/social-media-wrapper/HeaderSocialMediaWrapper";
import HeaderPersonalSpaceWrapper from "./components/personal-space-wrapper/HeaderPersonalSpaceWrapper";

export default function Header({ lang }: { lang: string }) {
  return (
    <div className="header-wrapper">
      <HotNewsBanner />
      <StoreTitle />
      <div className="header-navigations-wrapper">
        <HeaderSocialMediaWrapper />
        <HeaderNavigation />
        <HeaderPersonalSpaceWrapper lang={lang} />
      </div>
    </div>
  );
}
