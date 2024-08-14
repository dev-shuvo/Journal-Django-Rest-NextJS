import { Card } from "@/components/Card";
import React from "react";
import _ from "lodash";

export const generateMetadata = async ({ params }) => {
  const slug = params.slug;

  return {
    title: _.capitalize(slug),
  };
};

const Category = async ({ params }) => {
  const slug = params.slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const posts = data;
  return (
    <div className="container lg:max-w-5xl mx-auto p-10 md:px-0">
      <div className="mb-5 text-xl">
        <span className="font-bold">Category:</span>{" "}
        <span className="text-green-500">{_.capitalize(slug)}</span>
      </div>
      <>
        {posts && posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w mx-auto gap-y-8 gap-x-6">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div>No posts available!</div>
        )}
      </>
    </div>
  );
};

export default Category;
