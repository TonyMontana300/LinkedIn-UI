import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="hidden md:block">
      <div className="flex flex-wrap gap-y-2 gap-x-3 px-2 md:px-0 mb-12 md:mb-0 justify-center my-3">
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          About
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Accessibility
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Help Center
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Privacy & Terms
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Ad Choices
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Advertising
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Business Services
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          Get the LinkedIn app
        </Link>
        <Link
          to="#"
          className="text-xs text-gray-500 hover:underline hover:text-blue-600 footer-link-1"
        >
          More
        </Link>
        <div className="flex my-4 gap-1">
          <Link to="/" className="font-bold text-[#0A66C2] text-xs">
            Linked{" "}
            <span className="bg-[#0A66C2] text-white rounded-xs px-1">In</span>
          </Link>
          <span className="text-xs text-gray-900">
            LinkedIn Corporation © 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
