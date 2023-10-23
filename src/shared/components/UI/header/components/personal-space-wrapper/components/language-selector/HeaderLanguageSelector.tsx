import Image from "next/image";
import "./HeaderLanguageSelector.style.scss";
import GeorgianFlag from "../../../../../../../../../public/icons/georgian-flag.png";
import RussianFlag from "../../../../../../../../../public/icons/russian-flag.png";
import EnglishFlag from "../../../../../../../../../public/icons/english-flag.png";

type ILanguageOptListItem = {
  flagImg: any;
  title: string;
  value: string;
};

export default function HeaderLanguageSelector() {
  const languageOptions: Array<ILanguageOptListItem> = [
    {
      title: "РУ",
      value: "ru",
      flagImg: RussianFlag,
    },
    { title: "ქარ", value: "ka", flagImg: GeorgianFlag },
    { title: "EN", value: "en", flagImg: EnglishFlag },
  ];

  return (
    <>
      language chage
      {languageOptions.map((lang, index) => {
        return (
          <div key={index}>
            <Image src={lang.flagImg} alt={lang.title} width={20} height={20} />
            {lang.title}
          </div>
        );
      })}
    </>
  );
}
