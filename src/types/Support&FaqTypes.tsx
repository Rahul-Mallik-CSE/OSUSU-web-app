/** @format */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TicketFormData {
  subject: string;
  description: string;
  file: File | null;
}
