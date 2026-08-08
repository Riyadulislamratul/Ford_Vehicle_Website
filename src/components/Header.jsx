import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 container items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/logo.png"
            alt="Ford"
            className="h-auto w-24 sm:w-28 lg:w-32"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <a
            href="#"
            className="text-[19px] font-medium text-gray-900 transition hover:text-[#164b91]"
          >
            HOME
          </a>

          <a
            href="#"
            className="text-[19px] text-gray-700 transition hover:text-[#164b91]"
          >
            SUVS
          </a>

          <a
            href="#"
            className="text-[19px] text-gray-700 transition hover:text-[#164b91]"
          >
            TRUCKS
          </a>

          <a
            href="#"
            className="text-[19px] text-gray-700 transition hover:text-[#164b91]"
          >
            ELECTRIFIED
          </a>

          <a
            href="#"
            className="text-[19px] text-gray-700 transition hover:text-[#164b91]"
          >
            ALL VEHICLES
          </a>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-[19px] text-gray-700 transition hover:text-black">
            Sign in
          </button>

          <button className="border border-[#2d5ca8] px-4 py-2 text-[19px] font-medium text-[#164b91] transition hover:bg-[#164b91] hover:text-white">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-2xl text-gray-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8">

          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="border-b border-gray-100 py-4 text-[19px] font-medium text-gray-900"
          >
            HOME
          </a>

          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="border-b border-gray-100 py-4 text-[19px] text-gray-700"
          >
            SUVS
          </a>

          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="border-b border-gray-100 py-4 text-[19px] text-gray-700"
          >
            TRUCKS
          </a>

          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="border-b border-gray-100 py-4 text-[19px] text-gray-700"
          >
            ELECTRIFIED
          </a>

          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="border-b border-gray-100 py-4 text-[19px] text-gray-700"
          >
            ALL VEHICLES
          </a>

          {/* Mobile Auth Buttons */}
          <div className="flex items-center gap-4 pt-5">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[19px] text-gray-700"
            >
              Sign in
            </button>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="border border-[#2d5ca8] px-4 py-2 text-[19px] font-medium text-[#164b91] transition hover:bg-[#164b91] hover:text-white"
            >
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;