import React from "react";

//Styles
import styles from "@/features/project-details/components/ProjectDescription.module.scss";
//Types
import { Project } from "@/shared/types/project";
//Animations
import { motion } from "motion/react";
import { PortableText } from "next-sanity";
//Icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Button from "@/shared/components/ui/Button";

export const projectDescriptionVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

interface ProjectDescriptionProps {
  project: Project;
  closeDescription: () => void;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  project,
  closeDescription,
}) => {
  return (
    <motion.div className={styles.projectDescription}>
      <FaArrowLeft
        className={styles.backButton}
        onClick={() => closeDescription()}
      />
      <h2 className={styles.name}>{project.name}</h2>
      <div className={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <div key={index} className={styles.technology}>
            <em className={styles.technologyName}>#{tech}</em>
          </div>
        ))}
      </div>
      <div className={styles.details}>
        <PortableText value={project && project.description} />
      </div>
      <div className={styles.buttons}>
        <Button
          variant="primary"
          text="Live site"
          // onClick={() => window.open(project.url, "_blank")}
        />
        <Button
          variant="secondary"
          text="Github repo"
          icon={<FaGithub />}
          // onClick={() => window.open(project.github, "_blank")}
        />
      </div>
    </motion.div>
  );
};

export default ProjectDescription;
