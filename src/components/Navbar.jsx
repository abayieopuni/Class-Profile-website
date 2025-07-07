import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Air Force Logo.svg'; // ✅ Logo import

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-[#00308F] shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ✅ Logo and title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Air Force Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-lg sm:text-xl font-bold">Class 25043</h1>
        </div>

        {/* ✅ Mobile menu icon */}
        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} className="w-6 h-6" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-6 h-6" />
          )}
        </div>

        {/* ✅ Desktop nav menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className="hover:text-[#72A0C1] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#airmen" className="hover:text-[#72A0C1] transition">
              Airmen
            </a>
          </li>
          <li>
            <a href="#reflections" className="hover:text-[#72A0C1] transition">
              Reflections
            </a>
          </li>
        </ul>
      </div>

      {/* ✅ Mobile nav menu (visible when open) */}
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-[#00308F] text-white">
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#airmen" onClick={() => setOpen(false)}>
              Airmen
            </a>
          </li>
          <li>
            <a href="#reflections" onClick={() => setOpen(false)}>
              Reflections
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
