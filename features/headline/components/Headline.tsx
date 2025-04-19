import React from "react";

//Styles
import styles from "@/features/headline/components/Headline.module.css";

const Headline = () => {
  return (
    <div className={styles.headlineContainer}>
      <div>
        <h2 className="home-container__headline__text">
          Hello there, my name is Jakub. I`m a <br></br>{" "}
          {/* <TypeAnimation
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
          /> */}
        </h2>

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
    </div>
  );
};

export default Headline;
