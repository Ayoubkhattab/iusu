// "use client";
import Info from "./Footer/Info";

import dynamic from "next/dynamic";

export default function Footer() {
  const Map = dynamic(() => import("./Footer/Map"), {
    ssr: false,
  });
  return (
    <footer className="relative -z-10 bg-primary">
      <div className="flex flex-col gap-x-5 gap-y-5 px-5 py-2 md:flex-row">
        <div className="flex-1">
          <Info />
        </div>
        <div className="my-2 h-[180px] bg-red-500 md:w-1/2">
          <Map />
        </div>
      </div>

      <p className="flex h-16 flex-row items-center justify-center bg-info text-center text-sm text-white">
        جميع الحقوق محفوظة للجامعة الإسلامية في سوريا &copy; 2024
      </p>
    </footer>
  );
}
