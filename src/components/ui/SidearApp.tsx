import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbHome } from "react-icons/tb";
import CollapsibleMenuItem from "./CollapsibleMenuItem";

export default function SidearApp() {
  return (
    <aside className="hidden lg:block col-start-5 col-end-6 row-start-10 row-end-11 border-r-2 dark:border-slate-600 border-slate-300 overflow-y-auto">
      <ul className="p-4 w-full menu space-y-1 rounded-box">
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
        <CollapsibleMenuItem icon={<FaLayerGroup />} title="انجمن ها">
          <li className="w-full">
            <a>برنامه نویسان React</a>
          </li>
          <li>
            <a>برنامه نویسان Laravel</a>
          </li>
          <li>
            <a>برنامه نویسان Django</a>
          </li>
        </CollapsibleMenuItem>
        <CollapsibleMenuItem icon={<FaLayerGroup />} title="دنبال شده ها">
          <li className="w-full">
            <a>ایرانی‌کارت</a>
          </li>
          <li>
            <a>دانشگاه تهران</a>
          </li>
          <li>
            <a>کوئرا</a>
          </li>
        </CollapsibleMenuItem>
      </ul>
    </aside>
  );
}
