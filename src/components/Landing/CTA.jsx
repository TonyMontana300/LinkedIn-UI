import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import ctaAnim from "../../assets/images/Animation - 1722018212064.json"

const CTA = () => {
  return (
    <section className="md:p-5 py-3 md:mt-30 md:mb-10 mb-30 md:min-h-screen relative">
      <div className="absolute inset-0 -z-10 -bottom-40 md:bottom-0">
        <Lottie
          animationData={ctaAnim}
          autoplay
          loop
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {
        <div className="absolute inset-0 -z-5 bg-linear-to-b from-white/95 via-white/50 md:via-white/10 to-transparent"></div>
      }

      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start mt-4 mb-6">
        <h2 className="md:text-5xl sm:text-4xl text-3xl text-center md:text-left leading-tight mb-6">
          Join your colleagues, classmates, and friends on LinkedIn
        </h2>
        <Link
          to="/signup"
          className="px-6 py-3 block disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 disabled:active:ring-0 bg-blue-700 text-white rounded-3xl font-medium hover:bg-blue-800 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
        >
          Get started
        </Link>
      </div>
    </section>
  );
};

export default CTA;
