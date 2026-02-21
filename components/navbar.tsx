"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-lg shadow-cyan-900/20 group-hover:shadow-cyan-500/30 transition-all bg-slate-900">
            {/* Logo Image Placeholder */}
            <Image 
              src="/images/logo.svg" 
              alt="Atlas Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none">ATLAS</span>
            <div className="h-[2px] w-full bg-cyan-500 my-0.5 rounded-full"></div>
            <span className="text-[10px] text-slate-300 font-medium tracking-wider uppercase leading-none">Soluções Digitais</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#servicos"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Soluções
          </Link>
          <Link
            href="/#processo"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Como Funciona
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Portfólio
          </Link>
          <Button variant="glow" size="sm" asChild>
            <Link href="https://wa.me/5511999999999" target="_blank">
              Falar no WhatsApp
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/#servicos"
                className="text-base font-medium text-slate-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Soluções
              </Link>
              <Link
                href="/#processo"
                className="text-base font-medium text-slate-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Como Funciona
              </Link>
              <Link
                href="/portfolio"
                className="text-base font-medium text-slate-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </Link>
              <Button className="w-full mt-2" variant="default" asChild>
                <Link href="https://wa.me/5511999999999" target="_blank">
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
