/** @format */

"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { FilterOption } from "@/types/LedgerTypes";

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: FilterDropdownProps) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-8 sm:pr-10 bg-white border border-gray-300 rounded-lg text-gray-700 text-xs sm:text-sm font-medium hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
    </div>
  );
}
