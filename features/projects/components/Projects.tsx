"use client";

import React, { useState } from "react";

//Styles
import styles from "@/features/projects/components/Projects.module.scss";
//Components
import CategoryMenu from "./CategoryMenu";
import SectionHeadline from "@/shared/components/SectionHeadline";
import ProjectCard from "./ProjectCard";
//Types
import { Project } from "@/shared/types/project";
//Animations
import { AnimatePresence } from "motion/react";

interface ProjectsProps {
  projects: Project[];
}

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
    <section className={styles.projectsContainer} id="projects">
      <div className={`${styles.blobShape} ${styles.blobOne}`}></div>
      <div className={`${styles.blobShape} ${styles.blobTwo}`}></div>
      <SectionHeadline sectionName="My work" />
      <CategoryMenu
        activeCategory={activeCategory}
        changeCategory={handleCategoryChange}
      />

      <div className={styles.projectsList}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
