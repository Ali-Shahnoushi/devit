import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <span className="flex items-center gap-2 justify-center">
        <span className="text-xl hidden md:block font-bold">Devit</span>
        <img src="/images/logo.webp" alt="devit logo" className="w-8 md:w-10" />
      </span>
    </Link>
  );
}
