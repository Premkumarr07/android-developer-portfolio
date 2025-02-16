"use client"; // Ensures this runs on the client side
import { Menu, X } from "lucide-react"; // X is for the close icon
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion"; // Import animation library

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#378146] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold">PORTFOLIO</h1>

        {/* 🌟 Desktop Navigation (Circular) */}
        <motion.nav
          className="hidden md:flex items-center bg-white px-8 py-2 rounded-full shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative group mx-4 text-lg font-medium text-[#378146] hover:text-lime-600 transition"
            >
              {item}
              {/* Animated underline on hover */}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-lime-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </motion.nav>

        {/* 🍔 Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* 📱 Mobile Side Menu */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-[#378146] shadow-lg flex flex-col items-start p-6 space-y-6 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="self-end text-[#378146] hover:text-lime-600"
          onClick={() => setMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Mobile Menu Items */}
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-lg font-medium hover:text-lime-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </motion.div>
    </header>
  );
}
