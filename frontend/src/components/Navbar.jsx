"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useRouter } from "next/navigation";

export const Navbar = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <nav className="p-5 bg-slate-100 shadow-md sticky">
      <div className="container lg:max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <Link href={"/"}>
            <Image src={"/logo.png"} width={120} height={100} />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-7 text-sm">
            {categories.map((category) => {
              return (
                <Link
                  className="text-slate-600 hover:text-green-500"
                  key={category.id}
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              className="p-2 bg-slate-200 border border-slate-300 focus:border-green-500 rounded-l-full outline-none"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="p-3 bg-green-500 text-lg text-white rounded-r-full"
              disabled={!search}
            >
              <IoSearchOutline />
            </button>
          </form>
          <button
            className={"block md:hidden text-4xl"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <CiMenuBurger />
          </button>
        </div>

        {open && (
          <div className="absolute right-0 top-0 bg-slate-200 flex flex-col p-10 h-screen w-2/3 gap-5">
            <div className="font-bold text-green-500">Categories</div>
            {categories.map((category) => {
              return (
                <Link
                  className="text-slate-600 hover:text-green-500"
                  key={category.id}
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
