"use client";

import React from "react";

//Animations
import { motion, AnimatePresence } from "motion/react";
//Styles
import styles from "@/features/project-details/layouts/ProjectDetailsWrapper.module.scss";
//import { useRouter } from "next/navigation";

const ProjectDetailsWrapper = ({ children }: { children: React.ReactNode }) => {
  // const [isVisible, setIsVisible] = useState<boolean>(true);

  //const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div className={styles.projectDetailsWrapper}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsWrapper;
