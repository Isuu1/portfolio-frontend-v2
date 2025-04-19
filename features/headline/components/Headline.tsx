import React from "react";

//Styles
import styles from "@/features/headline/components/Headline.module.css";
import TypingAnimation from "./TypingAnimation";

const Headline = () => {
  return (
    <div className={styles.headlineContainer}>
      <h2>Hello there, my name is Jakub. I`m a</h2>
      <TypingAnimation />
      <div className="home-container__headline__buttons">
        <a href="#projects-container">
          <button className="home-container__headline__buttons__my-work">
            My work
            {/* <TbArrowBigDownLineFilled className="icon" /> */}
          </button>
        </a>
        <a href="https://github.com/Isuu1">
          <button className="home-container__headline__buttons__github">
            GitHub
            {/* <FaGithub className="icon" /> */}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Headline;
