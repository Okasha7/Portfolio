"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavComp";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { title: "About", path: "/About" },
  { title: "Services", path: "/services" }, 
  { title: "Contact", path: "/Contact" },
];


const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-transparent relative">
      <div className="flex items-center justify-between px-4 pt-8">
        <Link href="/" className="text-5xl text-white font-semibold">
          LOGO
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sliding mobile menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${navbarOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
          z-40
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close Menu"
            className="text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col items-left p-4 space-y-6 text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                href={link.path}
                title={link.title}
                onClick={() => setNavbarOpen(false)} 
              />
            </li>
          ))}
        </ul>
      </div>

      {navbarOpen && (
  <div
    className="fixed inset-0 bg-black opacity-50 z-30"
    onClick={() => setNavbarOpen(false)}
    aria-hidden="true"
  ></div>
)}

    </nav>
  );
};

export default NavBar;
