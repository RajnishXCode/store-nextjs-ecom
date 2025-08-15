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
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission logic here
  };

  const navMap = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/categories",
      label: "Categories",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  const iconMap = [
    {
      href: "/wishlist",
      label: "Wishlist",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      href: "/cart",
      label: "Cart",
      icon: <ShoppingCartIcon className="h-6 w-6" />,
    },
    {
      href: "/account",
      label: "Account",
      icon: <UserIcon className="h-6 w-6" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 md:px-30 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      {/* desktop menu */}
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="/aa.jpg" alt="Logo" className="h-8" />
            <span
              className={`ml-2 text-xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              E-Commerce
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          {navMap.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 px-3 font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 
                ${!scrolled ? "text-white" : "text-gray-700"}
                ${pathname === item.href ? "after:w-full" : ""}
                `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center md:space-x-4">
          <button
            onClick={toggleSearch}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 ${
              !scrolled
                ? "text-white hover:text-gray-800 hover:bg-white/90"
                : "text-gray-700"
            }`}
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          {iconMap.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center transition-all duration-300 hover:bg-gray-100 ${
                !scrolled
                  ? "text-white hover:text-gray-800 hover:bg-white/90"
                  : "text-gray-700"
              }`}
            >
              {item.icon}
            </Link>
          ))}

          {/* mobile menu btn */}
          <button
            type="button"
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 ${
              !scrolled
                ? "text-white hover:text-gray-800 hover:bg-white/90"
                : "text-gray-700"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* search input (expandable) */}
      {showSearch && (
        <div
          className={`absolute top-full left-0  w-full px-5 md:px-30
        ${scrolled ? "bg-white py-3" : "bg-transparent py-4"}
        `}
        >
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`flex-grow px-4 py-3 rounded-l-xl border-2 focus:ring-0 outline-none ${
                !scrolled
                  ? "bg-white/10 text-white placeholder-white/60 border-white/20 focus:border-white"
                  : "bg-white text-gray-900 placeholder-gray-400 border-gray-200 focus:border-primary"
              } transition-colors `}
              aria-label="Search Products"
              autoFocus
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-600 px-5 py-3 text-white rounded-r-xl transition-colors"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      {/* mobile menu */}

      {isOpen && (
        <div className="md:hidden">
          <div className={`p-5 shadow-lg mt-3 rounded-b-2xl ${!scrolled
                ? "bg-white/90 backdrop-blur-lg text-gray-800"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col space-y-5">
              {navMap.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile action buttons */}
              <div className="grid grid-cols-3 gap-4 pt-2">

                {iconMap.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col items-center justify-center px-4 py-3 rounded-xl focus:outline-none transition-all duration-300 bg-primary text-white hover:bg-secondary-600 shadow-btn hover:shadow-btn-hover transform hover:-translate-y-1 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="text-xs">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
