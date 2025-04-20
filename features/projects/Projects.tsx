"use client";

import React from "react";

//Styles
import styles from "@/features/projects/Projects.module.css";

//Animations
import { motion, AnimatePresence } from "motion/react";
import CategoryMenu from "./CategoryMenu";

const Projects = () => {
  return (
    <motion.div
      className={styles.projectsContainer}
      id="projects-container"
      //ref={props.projectsRef}
      //variants={childDelayTopSpring}
      //   whileInView={"visible"}
      //   initial="hidden"
    >
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <motion.div
        className="projects-container__headline"
        whileInView={"visible"}
        initial="hidden"
        // variants={headlineSpringAnimation}
      >
        My work
      </motion.div>
      <CategoryMenu />
      {/* <motion.div
        className="projects-container__type-selector"
        whileInView={"visible"}
        initial="hidden"
        variants={childDelayTopSpring}
      >
        <motion.button
          onClick={() => handleCatChange("All")}
          className={`projects-container__type-selector__button ${
            typeFilter === "All" ? "selected" : null // Adding class 'selected' to the button
          }`}
          variants={opacityAnimation}
        >
          All
        </motion.button>
        <motion.button
          onClick={() => handleCatChange("Web")}
          className={`projects-container__type-selector__button ${
            typeFilter === "Web" ? "selected" : ""
          }`}
          variants={opacityAnimation}
        >
          Web
        </motion.button>
        <motion.button
          onClick={() => handleCatChange("Ecommerce")}
          className={`projects-container__type-selector__button ${
            typeFilter === "Ecommerce" ? "selected" : ""
          }`}
          variants={opacityAnimation}
        >
          Ecommerce
        </motion.button>
        <motion.button
          onClick={() => handleCatChange("Mobile")}
          className="projects-container__type-selector__button"
          variants={opacityAnimation}
        >
          Mobile
        </motion.button>
      </motion.div> */}
      <AnimatePresence mode="wait"></AnimatePresence>
    </motion.div>
  );
};

export default Projects;
