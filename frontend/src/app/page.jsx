import { Card } from "@/components/Card";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/`, {
    cache: "no-store",
  });
  const data = await res.json();
  const posts = data;
  return (
    <div className="container lg:max-w-5xl mx-auto p-10 md:px-0">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w mx-auto gap-y-8 gap-x-6">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
