import React from "react";
import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <footer className="auth-footer py-4 text-xs">
      <ul className="list-none flex justify-center items-center gap-5 flex-wrap">
        <li className="origin-bottom gap-1 transition-transform duration-200 ease-out hover:-translate-y-0.5 text-sm">
          <Link to="/" className="font-bold">
            Linked{" "}
            <span className="bg-black text-white rounded-xs px-1">In</span>
          </Link>
        </li>
        <li>© 2026</li>
        <li className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
          <Link to="#" className="text-gray-500 hover:underline font-semibold">
            User Agreement
          </Link>
        </li>
        <li className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
          <Link to="#" className="text-gray-500 hover:underline font-semibold">
            Privacy Policy
          </Link>
        </li>
        <li className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
          <Link to="#" className="text-gray-500 hover:underline font-semibold">
            Community Guidelines
          </Link>
        </li>
        <li className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
          <Link to="#" className="text-gray-500 hover:underline font-semibold">
            Cookie Policy
          </Link>
        </li>
        <li className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
          <Link to="#" className="text-gray-500 hover:underline font-semibold">
            Copyright Policy
          </Link>
        </li>
        <li className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
          <Link to="#" className="text-gray-500 hover:underline font-semibold">
            Send Feedback
          </Link>
        </li>
        <li className="text-gray-500 hover:text-blue-700 font-semibold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5">
          Language
        </li>
      </ul>
    </footer>
  );
};

export default AuthFooter;
