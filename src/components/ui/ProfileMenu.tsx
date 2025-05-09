import React from "react";
import { FiUser } from "react-icons/fi";
import { IoLogInOutline, IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import ThemeToggle from "./ThemeToggle";
import NotificationMenu from "./NotificationMenu";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  return (
    <div className="dropdown dropdown-bottom">
      <div
        tabIndex={0}
        role="button"
        className="btn w-0 h-0 mx-3 rounded-field"
      >
        <div className="avatar ml-2">
          <div className="w-8 md:w-10 ring-primary ring-2 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content shadow-md menu mt-2 dark:!bg-zinc-800 dark:text-white !bg-zinc-100 rounded-box z-50 w-52 p-2 space-y-2"
      >
        <li>
          <a className="w-full flex items-center">
            <IoLogInOutline size={20} />
            <span>
              <Link to="/sign-in">ورود |‌ ثبت‌نام</Link>
            </span>
          </a>
        </li>
        <li>
          <a className="w-full flex items-center">
            <FiUser size={20} />
            <span>پروفایل</span>
          </a>
        </li>
        <li>
          <a className="w-full flex items-center">
            <IoSettingsOutline size={20} />
            <span>تنظیمات</span>
          </a>
        </li>
        <li>
          <a className="w-full flex items-center">
            <TbLogout size={20} />
            <span>خروج</span>
          </a>
        </li>
        <li>
          <span className="md:hidden flex items-center justify-start">
            <NotificationMenu />
            اعلان ها
          </span>
        </li>
        <li className="md:hidden flex">
          <span className="flex items-center justify-start">
            <ThemeToggle />
            تم
          </span>
        </li>
      </ul>
    </div>
  );
}
