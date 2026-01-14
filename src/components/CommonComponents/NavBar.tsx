/** @format */

"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";
import { IoIosSettings } from "react-icons/io";
const NavBar = () => {
  const pathname = usePathname();

  if (
    pathname === "/sign-in" ||
    pathname === "/sign-up" ||
    pathname === "/forget-pass" ||
    pathname === "/verify-method" ||
    pathname === "/verify-otp" ||
    pathname === "/reset-pass"
  ) {
    return null;
  }

  return (
    <>
      <div className="sticky top-0 z-40 w-full h-20 bg-white flex items-center px-2 md:px-4 shadow-md border border-transparent">
        <div className="w-full flex justify-between items-center">
          <SidebarTrigger />
          <div className="flex-1 ml-4">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-900">
              My Groups
            </h1>
            <p className="text-xs md:text-lg text-gray-700">
              Manage your savings circles and explore new opportunities
            </p>
          </div>

          {/* right side of navbar */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6 text-gray-700" />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Notifications"
            >
              <IoIosSettings className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
