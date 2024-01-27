import { BiMoon, BiSun } from "react-icons/bi";

import { GiCakeSlice } from "react-icons/gi";
import Link from "next/link";
import React from "react";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { useRouter } from "next/router";
import { useTheme } from "@/services/hooks/useTheme";

interface NavbarProps {
  isTransparent?: boolean;
  isAppWidth?: boolean;
  isFixed?: boolean;
}

const Navbar = ({ isTransparent, isFixed, isAppWidth = true }: NavbarProps) => {
  const { pathname } = useRouter();
  const { activeApp } = useNavigationStore();
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header
      className={`navbar ${isFixed ? "fixed top-0 z-50" : ""} ${
        isTransparent
          ? "bg-gradient-to-b from-neutral-focus to-transparent lg:bg-transparent lg:bg-none text-primary-content"
          : "bg-base-100"
      }`}
    >
      <div className={`${isAppWidth ? "max-w-screen-sm" : "p-4"} mx-auto w-full`}>
        <div className="sm:hidden dropdown dropdown-bottom">
          <div tabIndex={0} className="gap-2 pl-2 btn btn-ghost">
            <GiCakeSlice className="w-8 h-8" /> <span>Tiramisu</span>
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow dropdown-content menu bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Split Bill</Link>
            </li>
            <li>
              <Link href={"/invoice"}>Invoice Maker</Link>
            </li>
            {activeApp != "" ? (
              <>
                <li></li>
                <li>
                  <Link href={"/home"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
              </>
            ) : (
              <>
                <li></li>
                <li>
                  <Link href={pathname == "/about" ? "/home" : "/about"}>
                    {pathname == "/about" ? "Home" : "About"}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link href={"/home"}>
          <div className="hidden gap-2 pl-2 sm:inline-flex btn btn-ghost">
            <GiCakeSlice className="w-8 h-8" /> <span>Tiramisu</span>
          </div>
        </Link>
        {activeApp != "" ? (
          <div className="hidden sm:flex tabs tabs-boxed">
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
        ) : (
          <div className="hidden gap-1 sm:inline-flex btn-group">
            <Link href={"/"} className="btn btn-sm glass text-primary-content">
              Split bill
            </Link>
            <Link href={"/invoice"} className="btn btn-sm glass text-primary-content">
              Invoice maker
            </Link>
          </div>
        )}
        <div className="flex justify-end flex-1">
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              defaultChecked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="col-span-2 col-start-1 row-start-1 toggle"
            />
            <BiSun className={`col-start-1 row-start-1 ${!darkMode && "text-white"}`} />
            <BiMoon className={`col-start-2 row-start-1 ${darkMode && "text-neutral"}`} />
          </label>
          <input
            type="radio"
            className="hidden theme-controller"
            name="theme-picker"
            value="dark"
            readOnly
            checked={darkMode}
          />
          <input
            type="radio"
            className="hidden theme-controller"
            name="theme-picker"
            value="light"
            readOnly
            checked={!darkMode}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
