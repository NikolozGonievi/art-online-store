import "./HeaderPersonalSpaceWrapper.style.scss";
import HeaderLanguageSelector from "./components/language-selector/HeaderLanguageSelector";
import HeaderShoppingCart from "./components/shopping-cart/HeaderShoppingCart";
import HeaderUserProfile from "./components/user-profile/HeaderUserProfile";

export default function HeaderPersonalSpaceWrapper({ lang }: { lang: string }) {
  return (
    <div className="header-personal-space-wrapper">
      <HeaderUserProfile />
      <HeaderShoppingCart />
      <HeaderLanguageSelector lang={lang} />
    </div>
  );
}
