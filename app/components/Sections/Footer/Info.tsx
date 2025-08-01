"use client";

import getFooterSocials from "@/app/_actions/FooterSocials";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
type _Link = {
  href: string;
  label: string;
  is_active: boolean;
  id: number;
};
const links: Array<_Link> = [
  { href: "/home", label: "الرئيسية", is_active: false, id: 1 },
  { href: "/who-us", label: "من نحن", is_active: false, id: 2 },
  { href: "/programs", label: "البرامج الأكاديمية", is_active: false, id: 3 },
  {
    href: "/about-university",
    label: "الكادر التدريسي",
    is_active: false,
    id: 4,
  },
  { href: "/news", label: "الأخبار", is_active: false, id: 5 },
];
// { href: "/home", label: "الأنظمة والقرارات", is_active: false, id: 6 },

export default function Info() {
  // const NewsData: Array<any> = await getFooterSocials();
  const [socialLinks, setSocialLinks]: any = useState([]);

  useEffect(() => {
    async function fetchData() {
      setSocialLinks(await getFooterSocials());
    }

    fetchData();
  }, []);

  return (
    <div className="w-full overflow-hidden text-white">
      <div className="flex flex-row border-b-2 border-b-success p-2 pl-8 lg:ml-20">
        <Image
          src={"/images/logo.svg"}
          width={"120"}
          height={"140"}
          alt="ok"
          className="mb-2"
        />
        <div className="mx-2 flex flex-1 flex-col justify-end">
          <div className="mb-2 mr-1 flex flex-col justify-between gap-y-1 border-r-2 border-r-success pr-2">
            <p className="w-auto pl-10 text-sm md:text-lg lg:text-lg">
              صرح علمي يجمع تخصصات فريـدة
              <span className="my-3 block">ضمن بيئة معرفيـة متطورة</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex flex-wrap justify-between gap-x-1 gap-y-6 py-2">
          {links.map((item) => {
            return (
              <li className="w-1/4 text-sm" key={item.id}>
                <Link
                  href={item.href}
                  className="hover:text-success hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
