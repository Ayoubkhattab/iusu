"use client";

import { useEffect, useState } from "react";
import { FaShareNodes } from "react-icons/fa6";

export default function NewsShareButton({ resource }: { resource: string }) {
  const [navigatorShareIsAvaliable, setNavigatorShareIsAvaliable] =
    useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (window) {
      if ("share" in window.navigator) {
        setNavigatorShareIsAvaliable(true);
      }
    }
    setUrl(window.location.origin);
  }, []);

  function copyText(resource: string) {
    if (window) {
      const fullLink = `${url}/${resource}`;
      if (navigatorShareIsAvaliable) {
        window.navigator.share({
          title: "IUIS News",
          text: "Visit news by using link",
          url: fullLink,
        });
      } else {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = fullLink;

        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999);

        tempTextArea.remove();
      }
    }
  }

  return (
    <p
      className="group flex cursor-pointer select-none flex-row items-baseline gap-x-2 self-end text-sm"
      onClick={() => copyText(resource)}
    >
      {/* Icon  */}
      <FaShareNodes className="text-info" />
      {/* text  */}
      <span className="baseline text-secondary group-active:hidden">
        {"مشاركة"}
      </span>
      <span className="baseline hidden text-secondary group-active:inline">
        {navigatorShareIsAvaliable ? "مشاركة" : "نسخ"}
      </span>
    </p>
  );
}
