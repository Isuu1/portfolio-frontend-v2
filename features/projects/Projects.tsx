"use client";

import React from "react";

//Styles
import styles from "@/features/projects/Projects.module.css";

//Animations
import { motion } from "motion/react";
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
        className={styles.headline}
        whileInView={"visible"}
        initial="hidden"
        // variants={headlineSpringAnimation}
      >
        My work
      </motion.div>
      <CategoryMenu />
    </motion.div>
  );
};

export default Projects;
