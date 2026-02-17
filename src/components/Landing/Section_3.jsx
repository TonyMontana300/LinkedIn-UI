import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import imageAnim from "../../assets/images/Thinking Man - Yellow Bulb.json";

const Section_3 = () => {
  return (
    <section className="flex py-5 my-10">
      <div className="bg-[#F3F2F0] w-full">
        <div className="flex justify-center items-center my-20 md:my-60">
          <div className="flex flex-col md:w-md">
            <h2 className="text-[#B24020] text-3xl">Who is linkedIn for?</h2>
            <p className="text-gray-900 md:text-xl mb-4 mt-2 text-lg">
              Anyone who navigate their professional life
            </p>
            <div className="flex flex-col mt-4 gap-4">
              <Link
                to="#"
                className="bg-[#EAE6DF] hover:bg-[#E1DAD0] text-xl px-4 py-5 flex items-center justify-between"
              >
                Find a coworker or classmate
                <span>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
                      stroke="#5A5753"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="#"
                className="bg-[#EAE6DF] hover:bg-[#E1DAD0] text-xl px-4 py-5 flex items-center justify-between"
              >
                Find a new job
                <span>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
                      stroke="#5A5753"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="#"
                className="bg-[#EAE6DF] hover:bg-[#E1DAD0] text-xl px-4 py-5 flex items-center justify-between"
              >
                Find a course or training
                <span>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
                      stroke="#5A5753"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:block hidden">
        <Lottie
          animationData={imageAnim}
          autoplay
          loop
          className="inset-0 w-full h-full"
        />
      </div>
    </section>
  );
};

export default Section_3;
