"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Aastha Chauhan
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:text-orange">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-orange">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#publications" className="hover:text-orange">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#achievements" className="hover:text-orange">
                Achievements
              </Link>
            </li>
            <li>
              <Link href="#volunteer-experience" className="hover:text-orange">
                Volunteer
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="#about" className="hover:text-orange">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-orange">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#publications" className="hover:text-orange">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#achievements" className="hover:text-orange">
                Achievements
              </Link>
            </li>
            <li>
              <Link href="#volunteer-experience" className="hover:text-orange">
                Volunteer
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
