import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { IoLogInOutline, IoSettingsOutline, IoSearch } from 'react-icons/io5'
import { TbHome, TbLogout } from 'react-icons/tb'
import { IoMdHeartEmpty } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import ProfileMenu from './ProfileMenu'
import SearchInput from './SearchInput'
import NotificationMenu from './NotificationMenu'
import { UserInfo } from '@/types'

export default function Header({
    user,
    isLoggedIn,
}: {
    user: UserInfo | undefined
    isLoggedIn: boolean
}) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <>
            <header className="bg-base-100/50 sticky top-0 z-50 flex h-full w-full flex-row justify-between border-b-2 border-slate-300 p-3 backdrop-blur-lg dark:border-slate-600">
                <div className="navbar-start">
                    <ProfileMenu user={user} isLoggedIn={isLoggedIn} />
                    {isLoggedIn && (
                        <NotificationMenu className="mx-2 hidden md:block" />
                    )}

                    <button
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen)
                        }}
                        className="btn btn-ghost btn-circle flex md:hidden"
                    >
                        <IoSearch size={20} />
                    </button>
                    <ThemeToggle className="invisible md:visible" />
                </div>
                <div className="navbar-center hidden md:flex md:w-1/2 lg:w-1/3">
                    <SearchInput />
                </div>
                <div className="navbar-end">
                    <Logo />
                    <div className="drawer drawer-end w-16 lg:hidden">
                        <input
                            id="my-drawer"
                            type="checkbox"
                            className="drawer-toggle"
                        />
                        <div className="drawer-content">
                            <label
                                htmlFor="my-drawer"
                                className="btn btn-ghost drawer-button"
                            >
                                <RxHamburgerMenu
                                    size={24}
                                    className="text-base"
                                />
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label
                                htmlFor="my-drawer"
                                aria-label="close sidebar"
                                className="drawer-overlay"
                            ></label>
                            <ul className="bg-base-100 menu rounded-box min-h-full w-60 space-y-2 p-4">
                                <li>
                                    <div className="flex flex-row items-center">
                                        <span>
                                            <TbHome size={24} />
                                        </span>
                                        <div className="text-md leading-5">
                                            خانه
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex flex-row items-center">
                                        <span>
                                            <IoMdHeartEmpty size={24} />
                                        </span>
                                        <div className="text-md leading-5">
                                            موردعلاقه ها
                                        </div>
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
                    <label className="input bg-base-200 !outline-primary w-full border-0">
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
                            className="bg-base-200 z-20"
                            required
                            placeholder="دنبال چی می‌گردی..."
                        />
                    </label>
                </div>
            )}
        </>
    )
}
