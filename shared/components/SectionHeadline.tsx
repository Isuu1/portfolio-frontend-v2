"use client";

import React from "react";

//Styles
import styles from "@/shared/components/SectionHeadline.module.css";

//Animations
import { motion } from "motion/react";

export const sectionHeadlineVariants = {
  visible: {
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.3,
      stiffness: 140,
    },
  },
  hidden: {
    scale: 0,
  },
};

interface SectionHeadlineProps {
  sectionName: string;
}

const SectionHeadline: React.FC<SectionHeadlineProps> = ({ sectionName }) => {
  return (
    <motion.div
      className={styles.headline}
      whileInView="visible"
      initial="hidden"
      variants={sectionHeadlineVariants}
    >
      {sectionName}
    </motion.div>
  );
};

export default SectionHeadline;
