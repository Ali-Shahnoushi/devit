import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center w-dvw h-dvh flex-col gap-3">
        <Header />
        <h1 className="text-3xl font-extrabold underline text-secondary">
          ٔدرباره ما{" "}
        </h1>\
        <h2 className="text-2xl font-light text-amber-100">
          این پروژه دویت هست و قرار است برای برنامه نویسان یک کامیونیتی ایجاد
          کنیم
        </h2>
        <button className="btn btn-primary text-white">
          <Link to="/">خانه</Link>
        </button>
      </div>
    </>
  );
}
