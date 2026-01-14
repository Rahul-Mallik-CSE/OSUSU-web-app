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
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Group Leader</h2>
          <p className="text-sm text-gray-600 mt-1">New Member Request</p>
        </div>
        <button className="flex items-center gap-1 text-orange-500 text-sm font-medium hover:text-orange-600">
          <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {requests.length}
          </div>
          Manage all
        </button>
      </div>

      <div className="space-y-3">
        {requests.map((request, index) => (
          <div
            key={request.id}
            className={`flex items-center justify-between ${
              index !== requests.length - 1
                ? "pb-3 border-b border-gray-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {request.name}
                </p>
                <p className="text-xs text-gray-500">
                  {request.date} - {request.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleApprove(request.id)}
                className="p-1.5 hover:bg-green-50 rounded transition-colors"
              >
                <Check className="w-5 h-5 text-green-600" />
              </button>
              <button
                onClick={() => handleReject(request.id)}
                className="p-1.5 hover:bg-red-50 rounded transition-colors"
              >
                <X className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        ))}

        <button className="w-full flex items-center justify-center py-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
