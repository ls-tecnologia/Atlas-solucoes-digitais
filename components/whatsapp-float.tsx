"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5511999999999"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-900/30 transition-all hover:scale-110 hover:-translate-y-1 group animate-in fade-in zoom-in duration-500"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:animate-none"></span>
      <span className="relative flex items-center justify-center w-full h-full">
        <span className="absolute right-full mr-3 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
          Fale Conosco
        </span>
        <MessageCircle className="w-7 h-7" />
      </span>
    </Link>
  );
}
