"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type _Link = {
  href: string;
  label: string;
  is_active: boolean;
  id: number;
};

const links: Array<_Link> = [
  { href: "/", label: "الرئيسية", is_active: false, id: 1 },
  { href: "/who-us", label: "من نحن", is_active: false, id: 2 },
  { href: "/programs", label: "البرامج الأكاديمية", is_active: false, id: 3 },
  { href: "/about-university", label: "عـن الجامعة", is_active: false, id: 4 },
  { href: "/news", label: "الأخبار", is_active: false, id: 5 },
  { href: "/decisions", label: "الأنظمة والقرارات", is_active: false, id: 6 },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const tempFlexHeader = "";
  const itemClass =
    "block py-1 px-3 rounded-lg hover:bg-primary hover:shadow   hover:shadow-[0px_0px_2px_0px_#f7fafc]";
  return (
    <header>
      <nav className="bg-info py-2 shadow-[inset_0px_-0.5px_3px_0px_#ffffff]">
        <div className="max-w-screen flex flex-wrap items-center justify-between gap-10 p-2 px-3 md:flex-nowrap md:px-12 xl:justify-start">
          {/* Brand  */}
          <Image
            src={"/images/logo_semi.webp"}
            width={"60"}
            height={"60"}
            alt="iuis logo"
            loading="lazy"
          />
          {/* end Brand  */}
          {/* <div className="justify-self-end">
            <button className="text-sm text-white sign_btn_gradient py-2 px-3 rounded-lg">
              اضغط للتسجيل
            </button>
          </div> */}

          <button
            onClick={toggleMenu}
            type="button"
            // inline-flex
            className="h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* links  */}

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:mx-10 md:block`}
            id="navbar-default"
          >
            <ul className="flex flex-col gap-3 text-white md:mt-0 md:flex-row md:justify-evenly md:gap-0 md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              {links.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.href} className={itemClass}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className=" ">
                <Link
                  href={"#"}
                  className="block cursor-not-allowed px-3 py-1 md:rounded-xl md:border"
                >
                  البوابة الإلكترونية
                </Link>
              </li>
            </ul>
          </div>
          {/* end links  */}
        </div>
      </nav>
    </header>
  );
}
