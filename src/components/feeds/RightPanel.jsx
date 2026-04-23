import React from "react";
import News from "./News";
import Footer from "../layout/Footer";

const RightPanel = () => {
  return (
    <div className="md:flex md:flex-col md:gap-2 hidden">
      <News />
      <Footer />
    </div>
  );
};

export default RightPanel;
