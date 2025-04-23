import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/shared/types/project";
import Image from "next/image";
import React from "react";

//Styles
import styles from "@/features/project-details/components/ProjectImages.module.scss";

interface ProjectImagesProps {
  project: Project;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ project }) => {
  return (
    <div className={styles.projectImages}>
      <div className={styles.imagesWrapper}>
        {project?.images.map((image, index) => (
          <Image
            className={styles.image}
            key={index}
            src={urlFor(image).url()}
            alt=""
            fill
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectImages;
