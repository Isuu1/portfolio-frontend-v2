import React from "react";

//Styles
import styles from "@/features/headline/components/Headline.module.css";

//Components
import TypingAnimation from "./TypingAnimation";

//Icons
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import Button from "@/shared/components/ui/Button";

const Headline = () => {
  return (
    <div className={styles.headlineContainer}>
      <h1>Hello there, my name is Jakub. I`m a</h1>
      <TypingAnimation />
      <div className="home-container__headline__buttons">
        <a href="#projects-container">
          <Button
            variant="secondary"
            text="My work"
            icon={<TbArrowBigDownLineFilled />}
          />
        </a>
        <a href="https://github.com/Isuu1">
          <Button variant="primary" text="GitHub" icon={<FaGithub />} />
        </a>
      </div>
    </div>
  );
};

export default Headline;
