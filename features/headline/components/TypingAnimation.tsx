"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "full-stack engineer.",
        1500,
        "problem-solver.",
        1500,
        "tech enthusiast.",
        1500,
      ]}
      speed={40}
      repeat={Infinity}
      style={{ color: "#811ae5", fontWeight: "bold", fontSize: "2.3rem" }}
    />
  );
};

export default TypingAnimation;
