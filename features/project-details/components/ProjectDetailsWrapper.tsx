import React from "react";

//Styles
import styles from "./ProjectDetailsWrapper.module.scss";

const ProjectDetailsWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.projectDetailsWrapper}>{children}</div>;
};

export default ProjectDetailsWrapper;
