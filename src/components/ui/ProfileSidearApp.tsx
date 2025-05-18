import React from "react";
import { TbHome, TbLogout } from "react-icons/tb";
import { TbArticle } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSignout } from "@/hooks/auth/useSignOut";
import Swal from "sweetalert2";

export default function ProfileSidearApp() {
  const { signout, isSigningOut } = useSignout();

  return (
    <aside className="hidden lg:block col-start-1 col-end-4 row-start-10 row-end-11 border-l-2 dark:border-slate-600 border-slate-300 overflow-y-auto">
      <ul className="p-4 w-full menu space-y-1 rounded-box">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "bg-primary" : ""
            }
            to="/dashboard"
            end
          >
            <div className="flex gap-2 flex-row items-center">
              <span>
                <TbHome size={24} />
              </span>
              <div className="text-md leading-5">داشبورد</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "bg-primary" : ""
            }
            to="/dashboard/posts/"
            end
          >
            <div className="flex flex-row items-center">
              <div className="flex gap-2 flex-row items-center">
                <span>
                  <TbArticle size={24} />
                </span>
                <div className="text-md leading-5">پست ها</div>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "bg-primary" : ""
            }
            to="/dashboard/settings/"
            end
          >
            <div className="flex flex-row items-center">
              <div className="flex gap-2 flex-row items-center">
                <span>
                  <IoSettingsOutline size={24} />
                </span>
                <div className="text-md leading-5">تنظیمات</div>
              </div>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "bg-primary" : ""
            }
            to="/dashboard/profile/"
            end
          >
            <div className="flex flex-row items-center">
              <div className="flex gap-2 flex-row items-center">
                <span>
                  <FiUser size={24} />
                </span>
                <div className="text-md leading-5">پروفایل</div>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <div
            onClick={() => {
              Swal.fire({
                title: "آیا میخواهید خارج شوید؟",
                showDenyButton: true,
                confirmButtonText: "خروج",
                icon: "warning",
                denyButtonText: `بیخیال`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  signout();
                }
              });
            }}
            className="flex flex-row items-center"
          >
            <div className="flex gap-2 flex-row items-center">
              <span>
                <TbLogout size={24} />
              </span>
              <div className="text-md leading-5">خروج</div>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
}
