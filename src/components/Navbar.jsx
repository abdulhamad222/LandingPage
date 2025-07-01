'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons for menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-evenly items-center p-6 shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#873e23]">EstatePro</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="#">About</Link>
        <Link href="#">Our Projects</Link>
        <Link href="#">Interior</Link>
      </div>

      {/* Contact Button */}
      <button className="hidden md:block bg-[#873e23] text-white hover:bg-[#833e26] px-4 py-2 rounded">
        Contact
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link href="#" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Our Projects</Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>Interior</Link>
          <button className="bg-[#873e23] text-white hover:bg-[#833e26] px-4 py-2 rounded">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
