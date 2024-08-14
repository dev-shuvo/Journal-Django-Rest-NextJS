import { Card } from "@/components/Card";
import React from "react";
export const generateMetadata = async ({ params }) => {
  const keyword = params.keyword;

  return {
    title: keyword,
  };
};

const Search = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/?keyword=${keyword}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const posts = data;
  return (
    <div className="container lg:max-w-5xl mx-auto p-10 md:px-0">
      <div className="mb-5 text-xl">
        <span className="font-bold">Searched for:</span>{" "}
        <span className="text-green-500">{keyword}</span>
      </div>
      <>
        {posts && posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w mx-auto gap-y-8 gap-x-6">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div>No posts found!</div>
        )}
      </>
    </div>
  );
};

export default Search;
