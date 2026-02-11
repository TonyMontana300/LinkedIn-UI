import React from "react";
import Lottie from "lottie-react";
import { forwardRef } from "react";

const HoverIcons = forwardRef(({ animation, size, loop = true,}, ref) => {
  return (
    <div 
        className="flex justify-center items-center cursor-pointer shrink-0"
        style={{width: size, height: size}}
    >
    <Lottie
        lottieRef={ref}
        animationData={animation}
        autoplay={false}
        loop={loop}
        style={{width: size, height: size}}
    />
    </div>
  );
});

export default HoverIcons;
