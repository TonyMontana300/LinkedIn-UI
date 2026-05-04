import React from "react";
import { Link } from "react-router-dom";
import LandingBlueBtn from "../ui/LandingBlueBtn";
import LandingBlackBtn from "../ui/LandingBlackBtn";

const games = ["Zip", "Mini Sudoku", "Queens", "Tango", "Pinpoint", "Tango"];

const Section_2_flip = () => {
  return (
    <section className="bg-[#F3F2F0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-10 md:gap-30">
          <div className="flex flex-wrap gap-y-3 gap-x-2 md:w-3xl mb-15 md:mb-0 justify-center md:justify-start">
            {games.map((game) => (
              <LandingBlackBtn key={game} text={game}/>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="md:my-15 mt-10 w-sm">
              <h2 className="text-3xl text-center md:text-left  py-2 leading-normal">
                Keep your mind sharp with games
              </h2>
              <p className="md:text-xl text-lg text-gray-900 md:w-md text-center md:text-left py-2 leading-normal">
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
