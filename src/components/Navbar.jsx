// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { Menu, X } from 'lucide-react';
import logo from '../assets/Air Force Logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-[#00308F] shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Air Force Logo" className="w-10 h-10" />
          <h1 className="text-lg sm:text-xl font-bold">Class 25043</h1>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} className="w-6 h-6" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-6 h-6" />
          )}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-[#72A0C1]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/airmen" className="hover:text-[#72A0C1]">
              Airmen
            </Link>
          </li>
          <li>
            <Link to="/reflections" className="hover:text-[#72A0C1]">
              Reflections
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Links */}
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-[#00308F] text-white">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/airmen" onClick={() => setOpen(false)}>
              Airmen
            </Link>
          </li>
          <li>
            <Link to="/reflections" onClick={() => setOpen(false)}>
              Reflections
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
