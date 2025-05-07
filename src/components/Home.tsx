import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-dvw h-dvh flex-col gap-3">
        <Header />
        <h1 className="text-3xl font-extrabold underline text-secondary">
          خانه
        </h1>
        <button className="btn">دکمه</button>
        <h2 className="text-2xl font-light">
          این پروژه دویت هست و قرار است برای برنامه نویسان یک کامیونیتی ایجاد
          کنیم
        </h2>
        <button className="btn btn-primary text-white">
          <Link to="/about">درباره ما</Link>
        </button>
      </div>
    </>
  );
}
