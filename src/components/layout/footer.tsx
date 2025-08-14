import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { siteConfig } from "@/config/site";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Find social links by name
  const facebook =
    siteConfig.social.find((s) => s.name === "Facebook")?.url || "#";
  const twitter =
    siteConfig.social.find((s) => s.name === "Twitter")?.url || "#";
  const instagram =
    siteConfig.social.find((s) => s.name === "Instagram")?.url || "#";
  const youtube =
    siteConfig.social.find((s) => s.name === "YouTube")?.url || "#";

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-10 py-5 sm:py-10 md:py-14 md:px-30">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center mb-6">
              <img
                className="h-10 w-auto"
                src={siteConfig.logo}
                alt={siteConfig.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/120x40?text=Logo";
                }}
              />
              <span className="ml-3 text-xl font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-gray-400">
              We offer high-quality products at the best prices. Shop with us
              for an exceptional experience.
            </p>

            <div className="flex space-x-4 pt-2">
              {/* Social Icons */}
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.9441 7.92638C19.9568 8.10403 19.9568 8.28173 19.9568 8.45938C19.9568 13.8781 15.8325 20.1218 8.29441 20.1218C5.97207 20.1218 3.81473 19.4492 2 18.2817C2.32996 18.3198 2.64719 18.3325 2.98984 18.3325C4.90359 18.3325 6.67004 17.6853 8.07867 16.5812C6.27664 16.5431 4.76648 15.3629 4.24719 13.7386C4.5 13.7766 4.75277 13.802 5.01828 13.802C5.38832 13.802 5.7584 13.7513 6.10105 13.6624C4.22086 13.2817 2.81223 11.632 2.81223 9.63958V9.58884C3.35781 9.89341 3.99238 10.0838 4.66492 10.1091C3.56086 9.37306 2.83754 8.11674 2.83754 6.70805C2.83754 5.94658 3.04105 5.24849 3.40008 4.64126C5.41691 7.11419 8.44871 8.73958 11.8477 8.91724C11.7842 8.61267 11.7461 8.2954 11.7461 7.97809C11.7461 5.71907 13.5736 3.87805 15.8451 3.87805C17.0253 3.87805 18.0913 4.38458 18.84 5.19529C19.7664 5.02032 20.6547 4.6756 21.4416 4.20169C21.137 5.15724 20.4898 5.94662 19.6395 6.44046C20.4644 6.35236 21.2639 6.12482 21.9999 5.80755C21.4416 6.60962 20.7436 7.3249 19.9441 7.92638Z" />
                </svg>
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
              </a>
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186C23.2628 5.0942 22.4188 4.2426 21.329 4.00289C19.4 3.50003 12 3.50003 12 3.50003C12 3.50003 4.6 3.50003 2.671 4.00289C1.5812 4.2426 0.737201 5.0942 0.502001 6.186C0 8.121 0 12 0 12C0 12 0 15.879 0.502 17.814C0.737 18.9058 1.5812 19.7574 2.671 19.9971C4.6 20.5 12 20.5 12 20.5C12 20.5 19.4 20.5 21.329 19.9971C22.4188 19.7574 23.2628 18.9058 23.498 17.814C24 15.879 24 12 24 12C24 12 24 8.121 23.498 6.186ZM9.54601 15.5611V8.43889L15.8201 12L9.54601 15.5611Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-5 pb-1 border-b border-gray-800">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium text-white mb-5 pb-1 border-b border-gray-800">
              Customer Service
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/faq"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                FAQs
              </Link>
              <Link
                href="/shipping"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Returns & Refunds
              </Link>
              <Link
                href="/size-guide"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Size Guide
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-white mb-5 pb-1 border-b border-gray-800">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary mt-1 mr-3" />
                <span className="text-gray-400">
                  {siteConfig.contact.address}
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary mr-3" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-primary mr-3" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 px-10 md:px-30">
          <div className="py-6 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/terms-and-conditions"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
