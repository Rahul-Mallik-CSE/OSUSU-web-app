/** @format */

"use client";

import React, { useState } from "react";
import { Copy, Mail, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function InviteNetwork() {
  const [selectedGroup, setSelectedGroup] = useState("Select Group");
  const [copied, setCopied] = useState(false);
  const referralLink = "osusu.finace/join/osusu0882";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Join my group on Osusu: ${referralLink}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Join Osusu");
    const body = encodeURIComponent(
      `Join my group on Osusu using this link: ${referralLink}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleSMS = () => {
    const message = encodeURIComponent(
      `Join my group on Osusu: ${referralLink}`
    );
    window.location.href = `sms:?body=${message}`;
  };

  return (
    <div className="bg-[#B7EED9] rounded-lg p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-green-900">
          Invite Your Network
        </h2>
        <div className="relative w-full sm:w-auto">
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full sm:w-48 px-4 py-1 md:py-2.5 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer"
          >
            <option>Select Group</option>
            <option>Holiday Savings 2026</option>
            <option>Emergency Fund</option>
            <option>Vacation Fund</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Referral Link
          </label>
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-4 py-1 md:py-2.5 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleCopy}
              className="p-2  md:p-2.5  bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              title="Copy link"
            >
              <Copy className="w-3 md:w-5 h-3 md:h-5 text-gray-600" />
            </button>
          </div>
          {copied && (
            <p className="text-xs text-green-700 mt-1">Copied to clipboard!</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button
            onClick={handleWhatsApp}
            className="flex  items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-1 rounded-md text-sm font-medium transition-colors"
          >
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            WhatsApp
          </Button>
          <Button
            onClick={handleEmail}
            className="flex  items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-1 rounded-md text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Email
          </Button>
          <Button
            onClick={handleSMS}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 sm:px-6 py-1 rounded-md text-sm font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            SMS
          </Button>
        </div>
      </div>
    </div>
  );
}
