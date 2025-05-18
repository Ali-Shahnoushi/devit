import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-sm w-full border-t-2 border-slate-300 dark:border-slate-600 p-4 flex flex-row justify-around items-center">
      <p>
        <Link to="/about" className="text-primary font-bold">
          دویت
        </Link>{" "}
        یک پروژه برای دهندگان ایرانی ایجاد شده و هیچ‌گونه پشتیبانی مالی ندارد
      </p>
      <p>ایجاد شده با ❤️ - © 2025 </p>
    </footer>
  );
}
