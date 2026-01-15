/** @format */

"use client";

import type React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { IoGridOutline, IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import LogoutModal from "./LogOutModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiUsersThreeLight } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { TbUsersPlus } from "react-icons/tb";
import { Button } from "../ui/button";
import { IoIosSettings } from "react-icons/io";

// import { logout } from "@/service/authService";
export default function DashboardSidebar() {
  return <DashboardSidebarContent />;
}

function DashboardSidebarContent() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const { state } = useSidebar();

  const handleLogout = async () => {
    // Perform logout actions here (clear tokens, etc.)
    // Redirect to login page
    // await logout();
    // localStorage.removeItem("accessToken");
    // await logout();
    router.push("/sign-in");

    setIsLogoutModalOpen(false);
  };

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

  const isCollapsed = state === "collapsed";

  const navItems = [
    { href: "/", label: "Dashboard", icon: IoGridOutline },
    { href: "/my-group", label: "My Group", icon: PiUsersThreeLight },

    {
      href: "/wallet",
      label: "Wallet",
      icon: IoWalletOutline,
    },
    { href: "/ledger", label: "Ledger", icon: GoCreditCard },
    { href: "/referrals", label: "Referrals", icon: TbUsersPlus },
    { href: "/support-faq", label: "Support & FAQ", icon: BiSupport },
  ];

  return (
    <>
      <Sidebar className="border-r-0  " collapsible="icon">
        <SidebarContent className="bg-white">
          <div
            className={`flex flex-col items-center justify-center  px-0 md:px-0 mx-0 py-4 relative ${
              isCollapsed ? "px-0" : "gap-2"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="bg-[#56cab1] rounded-md text-3xl font-bold text-black px-2 py-0 flex items-center justify-center">
                0
              </div>
              <div
                className={`text-2xl ${
                  isCollapsed ? "hidden" : "block"
                } font-semibold `}
              >
                OSUSU
              </div>
            </div>
          </div>

          <SidebarMenu
            className={
              isCollapsed ? "px-0 space-y-0 items-center" : "md:px-0 space-y-0"
            }
          >
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={
                  pathname === item.href || pathname.startsWith(item.href + "/")
                }
                collapsed={isCollapsed}
              />
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter
          className={`w-full bg-white border-t border-gray-200 ${
            isCollapsed ? "px-2" : "px-3"
          }`}
        >
          {/* User Profile Section */}
          {!isCollapsed && (
            <div className="py-3 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-600 to-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <FaUserAlt className="text-white text-lg" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-gray-900 truncate">
                      Johson Roy
                    </span>
                    <span className="text-xs text-gray-500">Verified</span>
                  </div>
                </div>
                <button className="p-1 cursor-pointer bg-transparent text-black hover:bg-gray-100 rounded-md transition-colors shrink-0">
                  <IoIosSettings className="w-8 h-8 text-green-800" />
                </button>
              </div>

              {/* Log Out Button */}
              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className="w-full cursor-pointer flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <IoLogOutOutline className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            </div>
          )}

          {/* Collapsed State */}
          {isCollapsed && (
            <div className="py-3 flex flex-col items-center gap-2">
              <button className="p-1 cursor-pointer bg-transparent text-black hover:bg-gray-100 rounded-md transition-colors shrink-0">
                <IoIosSettings className="w-8 h-8 text-green-800" />
              </button>
              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className="p-2 cursor-pointer hover:bg-gray-100 rounded-md transition-colors"
              >
                <IoLogOutOutline className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          )}
        </SidebarFooter>
      </Sidebar>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

// ...existing code...

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={cn(
          active
            ? "bg-[#1D7865] text-white hover:text-white hover:bg-[#1D7865] focus:bg-[#1D7865] font-medium border-l-6 border-orange-500"
            : "bg-transparent text-gray-700 hover:bg-orange-50 hover:text-[#1D7865] font-medium "
        )}
      >
        <Link
          href={href}
          className={cn(
            collapsed
              ? "flex items-center justify-center px-4 py-5 transition-colors  w-full h-16 mx-auto "
              : "flex items-center gap-3 px-4 py-5 transition-colors rounded-none "
          )}
        >
          <Icon size={collapsed ? 20 : 18} />
          {!collapsed && <span className="text-sm">{label}</span>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
// ...existing code...
