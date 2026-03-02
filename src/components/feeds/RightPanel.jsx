import React from "react";
import News from "./News";
import Footer from "../layout/Footer";

const RightPanel = () => {
  return (
    <div className="flex flex-col gap-2">
      <News />
      <Footer />
    </div>
  );
};

export default RightPanel;
