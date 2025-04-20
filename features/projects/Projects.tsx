import React from "react";

//Styles
import styles from "@/features/projects/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      Projects
      <div style={{ width: "300px", aspectRatio: "1/1" }}>project</div>
      <div style={{ width: "300px", aspectRatio: "1/1" }}>project</div>
      <div style={{ width: "300px", aspectRatio: "1/1" }}>project</div>
    </div>
  );
};

export default Projects;
