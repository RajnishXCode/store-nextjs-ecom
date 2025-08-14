import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import { siteConfig } from "@/config/site";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md px-30 ${scrolled 
    ? "bg-red-500 backdrop-blur-md shadow-md py-2" 
    : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="/aa.jpg" alt="Logo" className="h-8" />
            <span className="ml-2 text-xl font-bold">E-Commerce</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link href="/" className={`nav-link ${!scrolled ? "text-gray-800 hover:text-gray-600" : "text-white"}`}>
            Home
          </Link>
          <Link href="/shop" className={`nav-link ${!scrolled ? "text-gray-800 hover:text-gray-600" : "text-white"}`}>
            Shop
          </Link>
          <Link href="/about" className={`nav-link ${!scrolled ? "text-gray-800 hover:text-gray-600" : "text-white"}`}>
            About
          </Link>
          <Link href="/contact" className={`nav-link ${!scrolled ? "text-gray-800 hover:text-gray-600" : "text-white"}`}>
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <Link href="/search" className="nav-link">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Link>

          <Link href="/cart" className="nav-link">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>

          <Link href="/wishlist" className="nav-link">
            <HeartIcon className="h-6 w-6" />
          </Link>
          
          <Link href="/account" className="nav-link">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>

      </div>
    </nav>
    
  );
}

export default Navbar;
