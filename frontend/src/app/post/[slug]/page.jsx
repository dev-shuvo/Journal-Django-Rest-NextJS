import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuDot } from "react-icons/lu";

export const generateMetadata = async ({ params }) => {
  const slug = params.slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${slug}`
  );
  const data = await res.json();
  const post = data;

  return {
    title: post.title,
  };
};

const Post = async ({ params }) => {
  const slug = params.slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const post = data;
  return (
    <div className="container lg:max-w-5xl mx-auto py-20 px-5 md:px-0 flex flex-col gap-5">
      {post.thumbnail && (
        <Image
          className="rounded"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${post.thumbnail}`}
          width={1000}
          height={1000}
        />
      )}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="flex items-center text-sm text-slate-500">
        {post.published_at.split("T")[0]} <LuDot />
        <Link href={"/category/" + post.category.slug}>
          {" "}
          <span className="font-bold hover:text-green-500">
            {post.category.name}
          </span>
        </Link>
      </div>
      <div
        className="leading-10"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className="flex gap-5 items-center">
        <span className="font-bold">Tags:</span>
        {post.tags.map((tag) => (
          <span key={tag.id} className="px-4 py-2 bg-slate-200 rounded">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
