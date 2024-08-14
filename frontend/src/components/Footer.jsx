import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-slate-700 py-4">
      <div className="container lg:max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-5">
        <div>
          <Link href={"/"}>
            <Image
              className={"grayscale"}
              src={"/logo.png"}
              width={120}
              height={100}
            />
          </Link>
        </div>
        <div className="text-slate-400">
          &copy; Journal, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
