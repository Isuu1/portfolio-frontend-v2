"use client";

import React from "react";

//Styles
import styles from "@/features/projects/components/Projects.module.css";

//Animations
import { motion } from "motion/react";
import CategoryMenu from "./CategoryMenu";
import SectionHeadline from "@/shared/components/SectionHeadline";

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
      <SectionHeadline sectionName="My work" />
      <CategoryMenu />
    </motion.div>
  );
};

export default Projects;
