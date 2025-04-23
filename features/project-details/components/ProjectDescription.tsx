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
import { TbWorldWww } from "react-icons/tb";
//Components
import Button from "@/shared/components/ui/Button";

export const projectDescriptionVariants = {
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const descriptionItemVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -70,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
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
    <motion.div
      className={styles.projectDescription}
      variants={projectDescriptionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.i
        className={styles.backButton}
        variants={descriptionItemVariants}
      >
        <FaArrowLeft onClick={() => closeDescription()} />
      </motion.i>

      <motion.h2 className={styles.name} variants={descriptionItemVariants}>
        {project.name}
      </motion.h2>
      <motion.div
        className={styles.technologies}
        variants={descriptionItemVariants}
      >
        {project.technologies.map((tech, index) => (
          <div key={index} className={styles.technology}>
            <em className={styles.technologyName}>#{tech}</em>
          </div>
        ))}
      </motion.div>
      <motion.div className={styles.details} variants={descriptionItemVariants}>
        <PortableText value={project && project.description} />
      </motion.div>
      <motion.div className={styles.buttons} variants={descriptionItemVariants}>
        <Button
          variant="primary"
          text="Live site"
          icon={<TbWorldWww />}
          onClick={() => window.open(project.projectUrl, "_blank")}
        />
        <Button
          variant="secondary"
          text="Github repo"
          icon={<FaGithub />}
          onClick={() => window.open(project.repoUrl, "_blank")}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectDescription;
