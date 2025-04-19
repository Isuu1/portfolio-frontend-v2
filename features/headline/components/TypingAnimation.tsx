"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "front-end developer.",
        1500,
        "web designer.",
        1500,
        "tech enthusiast.",
        1500,
      ]}
      speed={40}
      repeat={Infinity}
      style={{ color: "#811ae5", fontWeight: "bold" }}
    />
  );
};

export default TypingAnimation;
