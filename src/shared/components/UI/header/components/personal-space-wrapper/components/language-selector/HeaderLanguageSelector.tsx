import "./HeaderLanguageSelector.style.scss";
import GeorgianFlag from "../../../../../../../../../public/icons/georgian-flag.png";
import RussianFlag from "../../../../../../../../../public/icons/russian-flag.png";
import EnglishFlag from "../../../../../../../../../public/icons/english-flag.png";
import CustomDropdown from "@/shared/UI/select/CustomSelect";
import { ICustomDropdownOption } from "@/shared/UI/select/CustomSelect.model";

export default function HeaderLanguageSelector({ lang }: { lang: string }) {
  const langOpts: Array<ICustomDropdownOption> = [
    { label: "ქარ", value: "ka", icon: GeorgianFlag },
    { label: "EN", value: "en", icon: EnglishFlag },
    {
      label: "РУ",
      value: "ru",
      icon: RussianFlag,
    },
  ];

  const defaultValue = langOpts.find((opt) => opt.value === lang);

  return (
    <>
      <CustomDropdown
        options={langOpts}
        className="language-select"
        defaultValue={defaultValue}
        placeholder="lang"
      />
    </>
  );
}
