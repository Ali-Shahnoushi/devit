import React from 'react'
import { FiUser } from 'react-icons/fi'
import { IoLogInOutline, IoSettingsOutline } from 'react-icons/io5'
import { TbLogout } from 'react-icons/tb'
import ThemeToggle from './ThemeToggle'
import NotificationMenu from './NotificationMenu'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useSignout } from '@/hooks/auth/useSignOut'
import { UserInfo } from '@/types'

export default function ProfileMenu({
    isLoggedIn,
    user,
}: {
    isLoggedIn: boolean
    user?: UserInfo
}) {
    const { signout } = useSignout()

    return (
        <div className="dropdown dropdown-bottom">
            <div
                tabIndex={0}
                role="button"
                className="btn rounded-field mx-3 h-0 w-0"
            >
                <div className="avatar ml-2">
                    <div className="ring-primary w-8 rounded-full ring-2 md:w-10">
                        <img
                            src={
                                user?.avatar && isLoggedIn
                                    ? `http://localhost:8000${user.avatar}`
                                    : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                            }
                        />
                    </div>
                </div>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-50 mt-2 w-52 space-y-2 !bg-zinc-100 p-2 shadow-md dark:!bg-zinc-800 dark:text-white"
            >
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to="/dashboard">
                                <span className="flex w-full items-center gap-2">
                                    <FiUser size={20} />
                                    <span>پروفایل</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/settings/">
                                <span className="flex w-full items-center gap-2">
                                    <IoSettingsOutline size={20} />
                                    <span>تنظیمات</span>
                                </span>
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                Swal.fire({
                                    title: 'آیا میخواهید خارج شوید؟',
                                    showDenyButton: true,
                                    confirmButtonText: 'خروج',
                                    icon: 'warning',
                                    denyButtonText: `بیخیال`,
                                }).then((result) => {
                                    /* Read more about isConfirmed, isDenied below */
                                    if (result.isConfirmed) {
                                        signout()
                                    }
                                })
                            }}
                        >
                            <a className="flex w-full items-center">
                                <TbLogout size={20} />
                                <span>خروج</span>
                            </a>
                        </li>
                        <li>
                            <span className="flex items-center justify-start md:hidden">
                                <NotificationMenu />
                                اعلان ها
                            </span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/sign-in">
                                <span className="flex w-full items-center">
                                    <IoLogInOutline size={20} />
                                    <span>ورود |‌ ثبت‌نام</span>
                                </span>
                            </Link>
                        </li>
                    </>
                )}

                <li className="flex md:hidden">
                    <span className="flex items-center justify-start">
                        <ThemeToggle />
                        تم
                    </span>
                </li>
            </ul>
        </div>
    )
}
