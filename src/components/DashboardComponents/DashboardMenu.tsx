/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SidebarMenuItem {
  label: string;
  href: string;
}

const menuItems: SidebarMenuItem[] = [
  { label: "Join a Group", href: "/join-group" },
  { label: "Create Group", href: "/create-group" },
  { label: "View Ledger", href: "/ledger" },
];

export default function DashboardMenu() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {menuItems.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors ${
            index !== menuItems.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <span className="text-gray-900 font-medium text-sm sm:text-base">
            {item.label}
          </span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </Link>
      ))}
    </div>
  );
}
