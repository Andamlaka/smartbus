import React, { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/fm-logo.png"
            alt="FM Bus Logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-xl font-bold text-gray-800">FM BUS</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Routes
          </a>
          <div className="flex items-center gap-2 cursor-pointer rounded-xl border border-gray-300 px-3 py-2 hover:border-blue-500">
            <img
              src="/images/user.png"
              alt="User"
              className="h-8 w-8 object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              Sign up / Login
            </span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-700 focus:outline-none md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-x-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 pt-2 text-gray-700">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
          <a href="#" className="hover:text-blue-600">
            Routes
          </a>
          <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2  hover:border-blue-500">
            <img
              src="/images/user.png"
              alt="User"
              className="h-8 w-8 object-cover"
            />
            <span className="text-sm font-medium">Sign up / Login</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
