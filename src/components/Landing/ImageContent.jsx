import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import connectAnim from "../../assets/images/Connection people.json";
import skillsAnim from "../../assets/images/developer skills.json";
import LandingBlackBtn from "../ui/LandingBlackBtn";

const ImageContent = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around my-10 md:my-40 py-5">
      <div className="flex flex-col items-center gap-2">
        <div className="md:w-md">
          <Lottie
            animationData={connectAnim}
            autoplay
            loop
            className="inset-0 w-full h-full"
          />
        </div>
        <h2 className="text-3xl text-center md:text-left py-2 leading-normal">
          Connect with people who can help
        </h2>
        <LandingBlackBtn text="Find people you know"/>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="md:w-md">
          <Lottie
            animationData={skillsAnim}
            autoplay
            loop
            className="inset-0 w-full h-full"
          />
        </div>
        <h2 className="text-3xl py-2 text-center md:text-left leading-normal">
          Learn the skills you need to succeed
        </h2>
        <LandingBlackBtn text="Choose a topic to learn about"/>
      </div>
    </section>
  );
};

export default ImageContent;
