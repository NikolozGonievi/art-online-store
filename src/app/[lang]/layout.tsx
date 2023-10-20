// "use client";

// import Footer from "@/shared/components/UI/footer/Footer";
// import Header from "@/shared/components/UI/header/Header";
// import { NextIntlClientProvider } from "next-intl";
// import { notFound } from "next/navigation";
// import { Inter } from "next/font/google";
// import "@/app/layout.style.scss";
// import "@/app/globals.scss";
// import { getDictionary } from "./dictionaries";

// const inter = Inter({ subsets: ["latin"] });

// // export function generateStaticParams() {
// //   return [{ locale: "en" }, { locale: "ru" }, { locale: "ge" }];
// // }

// export default function LocaleLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   // locale = "ka";
//   let messages;

//   //   const par = params;
//   // console.log("LocaleLayout", params);

//   try {
//     messages = getDictionary(locale);
//     console.log("kuku messages", messages, locale);
//   } catch (error) {
//     console.log("kuku messages", messages);
//     // notFound();
//   }

//   return (
//     <html lang={locale}>
//       <body className={inter.className}>
//         <NextIntlClientProvider locale={locale} /* messages={messages} */>
//           <div className="layout-wrapper">
//             <div>
//               <Header></Header>
//               <div>{children}</div>
//             </div>
//             <Footer></Footer>
//           </div>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import { NextIntlClientProvider } from "next-intl";
import React from "react";

import "../globals.scss";
import "../layout.style.scss";
import Header from "@/shared/components/UI/header/Header";
import Footer from "@/shared/components/UI/footer/Footer";

export default async function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  let messages;
  console.log("LocaleLayout", lang);

  try {
    messages = (await import(`./dictionaries/${lang}.json`)).default;
  } catch (error) {}

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <div className="layout-wrapper">
            <div>
              <Header></Header>
              <div>{children}</div>
            </div>
            <Footer></Footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
