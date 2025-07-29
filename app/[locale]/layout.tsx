import type { Metadata } from "next";

import { getLangDir } from "rtl-detect";
import { getLocale } from "next-intl/server";
import { Alexandria } from "next/font/google";
// import Header from "../components/Sections/Header";
import Header from "@sections/Header";

import Footer from "@sections/Footer";

import "@styles/globals.css";

const alexandria = Alexandria({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "IUIS Unversity",
  description: "الجامعة الإسلامية في سوريا",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className={`${alexandria.className} bg-gray`}>
        <Header />
        <p className="w-full bg-yellow-200 p-4 text-center text-red-500 shadow-lg">
          الموقع قيد التطوير
        </p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
