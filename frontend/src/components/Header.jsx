import React from "react";
import { Navbar } from "./Navbar";

export const Header = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/`);
  const data = await res.json();
  const categories = data;
  return <Navbar categories={categories} />;
};
