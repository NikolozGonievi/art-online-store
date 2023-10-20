"use client";

import Footer from "@/shared/components/UI/footer/Footer";
import Header from "@/shared/components/UI/header/Header";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import "@/app/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ru" }, { locale: "ge" }];
// }

export default async function NotFound({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("kuku not found 123");

  return (
    <div>
      not found
      {/* <div>
        <Header></Header>
        not found
      </div>
      <Footer></Footer> */}
    </div>
  );
}
