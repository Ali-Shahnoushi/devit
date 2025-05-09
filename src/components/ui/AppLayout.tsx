import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import SidearApp from "./SidearApp";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[0_0_0_4fr_0] lg:grid-cols-[0_0_0_4fr_1fr]  overflow-y-hidden h-screen grid-rows-[60px_0_0_0_0_0_0_0_0_9fr] gap-0">
      <div className="col-start-4 col-end-6 row-start-1 row-end-2">
        <Header />
      </div>
      <main
        dir="ltr"
        className="col-start-4 col-end-5 overflow-y-auto row-start-10 row-end-11"
      >
        <Outlet />
        <footer className="text-sm w-full border-t-2 border-slate-300 dark:border-slate-600 p-4 flex flex-row justify-around items-center">
          <p>
            <span className="text-primary font-bold">دویت</span> یک پروژه برای
            دهندگان ایرانی ایجاد شده و هیچ‌گونه پشتیبانی مالی ندارد
          </p>
          <p>ایجاد شده با ❤️ - © 2025 </p>
        </footer>
      </main>
      <SidearApp />
    </div>
  );
}
