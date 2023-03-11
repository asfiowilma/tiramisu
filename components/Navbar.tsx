import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { themeChange } from "theme-change";

const Navbar = () => {
  const { activeApp } = useNavigationStore();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <header className="navbar bg-base-100">
      <div className="max-w-screen-sm mx-auto w-full">
        <div className="ms:hidden dropdown dropdown-bottom">
          <div tabIndex={0} className="btn btn-ghost pl-2 gap-2">
            <GiCakeSlice className="w-8 h-8" /> <span>Tiramisu</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Split Bill</Link>
            </li>
            <li>
              <Link href={"/invoice"}>Invoice Maker</Link>
            </li>
          </ul>
        </div>
        <div className="hidden ms:inline-flex btn btn-ghost pl-2 gap-2">
          <GiCakeSlice className="w-8 h-8" /> <span>Tiramisu</span>
        </div>
        <div className="hidden ms:flex tabs tabs-boxed">
          <Link
            href={"/"}
            className={`tab transition ${activeApp == "split-bill" && "tab-active"}`}
          >
            Split Bill
          </Link>
          <Link
            href={"/invoice"}
            className={`tab transition ${activeApp == "invoice-maker" && "tab-active"}`}
          >
            Invoice Maker
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className=" btn btn-square btn-ghost swap swap-rotate "
            data-toggle-theme="dark,light"
            data-act-class="swap-active"
          >
            <FaSun className="swap-off w-5 h-5" />
            <FaRegMoon className="swap-on w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
