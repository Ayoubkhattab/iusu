"use client";

import getFooterSocials from "@/app/_actions/FooterSocials";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
// type _Link = {
//   href: string;
//   label: string;
//   is_active: boolean;
//   id: number;
// };
// const links: Array<_Link> = [
//   { href: "/home", label: "الرئيسية", is_active: false, id: 1 },
//   { href: "/home", label: "من نحن", is_active: false, id: 2 },
//   { href: "/home", label: "البرامج الأكاديمية", is_active: false, id: 3 },
//   { href: "/home", label: "الكادر التدريسي", is_active: false, id: 4 },
//   { href: "/home", label: "الأخبار", is_active: false, id: 5 },
//   { href: "/home", label: "الأنظمة والقرارات", is_active: false, id: 6 },
// ];

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
              <span className="inline-block md:hidden">
                نحو علـمٍ متميـزٍ رصيـن
              </span>
              <span className="hidden md:inline-block">
                نحو علمٍ متميزٍ رصين
              </span>
            </p>
            <div className="mt-2 flex flex-row gap-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=61565416586068&mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebook className="size-4 cursor-pointer hover:text-info md:size-5" />
              </a>
              <a href="" target="_blank">
                <FaInstagram className="size-4 cursor-pointer hover:text-info md:size-5" />
              </a>
              <a href="https://youtube.com/@islamic_u1446?si=OAX-MtlGi68bC31o">
                <FaYoutube className="size-4 cursor-pointer hover:text-info md:size-5" />
              </a>
              <a
                href="https://x.com/iuis_1446?t=c-oKvqP5u5tKeoDJrdt5OQ&s=09"
                target="_blank"
              >
                <FaTwitter className="size-4 cursor-pointer hover:text-info md:size-5" />
              </a>
              <a href="" target="_blank">
                <FaWhatsapp className="size-4 cursor-pointer hover:text-info md:size-5" />
              </a>
              <a href="https://t.me/iuis_1446" target="_blank">
                <FaTelegram className="size-4 cursor-pointer hover:text-info md:size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*<div>
         <ul className="flex  flex-wrap   justify-between py-2  gap-x-1  gap-y-6">
          {links.map((item) => {
            return (
              <li className="w-1/4 text-sm" key={item.id}>
                {item.label}
              </li>
            );
          })}
        </ul> 
      </div>*/}
    </div>
  );
}
