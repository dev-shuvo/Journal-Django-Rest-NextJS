import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuDot } from "react-icons/lu";

export const Card = ({ post }) => {
  return (
    <div className="flex flex-col gap-3 bg-slate-100 border border-slate-200 p-4 rounded">
      {post.thumbnail && (
        <Link href={"/post/" + post.slug}>
          <Image
            className="rounded w-full"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${post.thumbnail}`}
            width={500}
            height={500}
          />
        </Link>
      )}

      <h1 className="font-bold text-xl hover:text-green-500">
        <Link href={"/post/" + post.slug}>{post.title}</Link>
      </h1>
      <div className="flex items-center text-sm text-slate-500">
        {post.published_at.split("T")[0]} <LuDot />
        <Link href={"/category/" + post.category.slug}>
          {" "}
          <span className="font-bold hover:text-green-500">
            {post.category.name}
          </span>
        </Link>
      </div>
    </div>
  );
};
