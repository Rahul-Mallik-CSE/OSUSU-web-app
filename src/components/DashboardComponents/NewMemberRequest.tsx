/** @format */

"use client";

import React from "react";
import Image from "next/image";
import { MemberRequest } from "@/types/DashboardTypes";
import { Check, X, ChevronRight } from "lucide-react";

interface NewMemberRequestProps {
  requests: MemberRequest[];
}

export default function NewMemberRequest({ requests }: NewMemberRequestProps) {
  const handleApprove = (id: string) => {
    console.log("Approve:", id);
  };

  const handleReject = (id: string) => {
    console.log("Reject:", id);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="flex items-start sm:items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Group Leader
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            New Member Request
          </p>
        </div>
        <button className="flex items-center gap-1 text-orange-500 text-xs sm:text-sm font-medium hover:text-orange-600">
          <div className="bg-orange-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">
            {requests.length}
          </div>
          <span className="hidden sm:inline">Manage all</span>
          <span className="sm:hidden">Manage</span>
        </button>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {requests.map((request, index) => (
          <div
            key={request.id}
            className={`flex items-center justify-between ${
              index !== requests.length - 1
                ? "pb-2 sm:pb-3 border-b border-gray-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                  {request.name}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  {request.date} - {request.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <button
                onClick={() => handleApprove(request.id)}
                className="p-1 sm:p-1.5 hover:bg-green-50 rounded transition-colors"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </button>
              <button
                onClick={() => handleReject(request.id)}
                className="p-1 sm:p-1.5 hover:bg-red-50 rounded transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              </button>
            </div>
          </div>
        ))}

        <button className="w-full flex items-center justify-center py-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
