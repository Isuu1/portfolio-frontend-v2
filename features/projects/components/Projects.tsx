"use client";

import React, { useState } from "react";

//Styles
import styles from "@/features/projects/components/Projects.module.scss";
//Animations
import { motion } from "motion/react";
//Components
import CategoryMenu from "./CategoryMenu";
import SectionHeadline from "@/shared/components/SectionHeadline";
import ProjectCard from "./ProjectCard";
//Types
import { Project } from "@/shared/types/project";

interface ProjectsProps {
  projects: Project[];
}

export const projectsContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") {
      return true;
    }
    return project.categories.some(
      (cat) => cat.title.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <motion.div
      className={styles.projectsContainer}
      id="projects-container"
      variants={projectsContainerVariants}
      // whileInView="visible"
      // initial="hidden"
    >
      {/* <div className="shape-blob one"></div>
      <div className="shape-blob two"></div> */}
      <SectionHeadline sectionName="My work" />
      <CategoryMenu
        activeCategory={activeCategory}
        changeCategory={handleCategoryChange}
      />
      <div className={styles.projectsList}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
