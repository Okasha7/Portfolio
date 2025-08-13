"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavComp";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; 

const navLinks = [
  { title: "About", path: "#About" },
  { title: "Services", path: "#Services" },
  { title: "Contact", path: "#Contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between px-4 pt-8 ">
   
        <Link href="/" className="text-5xl text-white font-semibold">
          LOGO
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
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

      {navbarOpen && (
        <div className="md:hidden px-4 pt-4">
          <ul className="flex flex-col items-start space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
