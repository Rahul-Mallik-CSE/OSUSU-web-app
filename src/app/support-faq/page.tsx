/** @format */

import React from "react";
import FaqList from "@/components/Support&FaqComponents/FaqList";
import SubmitTicketForm from "@/components/Support&FaqComponents/SubmitTicketForm";
import { faqData } from "@/data/Support&FaqData";

const SupportAndFaqPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="max-w-625 mx-auto p-3 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Side - FAQ Section */}
          <div>
            <FaqList faqs={faqData} />
          </div>

          {/* Right Side - Submit Ticket Form */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <SubmitTicketForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportAndFaqPage;
