import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoLogInOutline, IoSettingsOutline, IoSearch } from "react-icons/io5";
import { TbHome, TbLogout } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import SearchInput from "./SearchInput";
import NotificationMenu from "./NotificationMenu";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 dark:border-slate-600 border-slate-300 border-b-2 bg-base-100 flex h-full flex-row justify-between w-full p-3">
        <div className="navbar-start">
          <ProfileMenu />
          <NotificationMenu className="mx-2 hidden md:block" />

          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
            className="flex md:hidden btn btn-ghost btn-circle"
          >
            <IoSearch size={20} />
          </button>
          <ThemeToggle className="md:visible invisible" />
        </div>
        <div className="navbar-center hidden md:w-1/2 md:flex lg:w-1/3">
          <SearchInput />
        </div>
        <div className="navbar-end">
          <Logo />
          <div className="lg:hidden drawer drawer-end w-16">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <RxHamburgerMenu size={24} className="text-base" />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="bg-base-100 min-h-full w-60 p-4 menu space-y-2 rounded-box">
                <li>
                  <div className="flex flex-row items-center">
                    <span>
                      <TbHome size={24} />
                    </span>
                    <div className="text-md leading-5">خانه</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center">
                    <span>
                      <IoMdHeartEmpty size={24} />
                    </span>
                    <div className="text-md leading-5">موردعلاقه ها</div>
                  </div>
                </li>
                <li>
                  <details>
                    <summary>انجمن ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>برنامه نویسان React</a>
                        </li>
                        <li>
                          <a>برنامه نویسان Laravel</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>دنبال شده ها</summary>
                    <div>
                      <ul>
                        <li>
                          <a>ایرانی‌کارت</a>
                        </li>
                        <li>
                          <a>دانشگاه تهران</a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <div className="w-full px-4">
          <label className="input border-0 bg-base-200 !outline-primary w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="z-20 bg-base-200"
              required
              placeholder="دنبال چی می‌گردی..."
            />
          </label>
        </div>
      )}
    </>
  );
}
