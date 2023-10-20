import React from "react";

import "./Header.style.scss";
import HotNewsBanner from "./components/hot-news-banner/HotNewsBanner";
import StoreTitle from "./components/store-title/StoreTitle";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";

export default function Header() {
  return (
    <>
      <HotNewsBanner />
      <StoreTitle />
      <HeaderNavigation />
    </>
  );
}
