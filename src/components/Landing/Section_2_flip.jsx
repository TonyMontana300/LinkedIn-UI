import React from "react";
import { Link } from "react-router-dom";
const games = ["Zip", "Mini Sudoku", "Queens", "Tango", "Pinpoint", "Tango"];

const Section_2_flip = () => {
  return (
    <section className="bg-[#F3F2F0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center gap-30">
          <div className="flex flex-wrap gap-y-3 gap-x-2 items-start content-start w-3xl">
            {games.map((game) => (
              <Link
                key={game}
                to="#"
                className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
              >
                {game}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" my-15 w-sm ">
              <h2 className="text-3xl py-2 leading-normal">
                Keep your mind sharp with games
              </h2>
              <p className="text-xl text-gray-900 w-md py-2 leading-normal">
                Take a break and reconnect with your network through quick daily
                games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2_flip;
