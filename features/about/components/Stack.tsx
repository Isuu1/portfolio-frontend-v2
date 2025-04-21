import Image from "next/image";
import React from "react";

//Styles
import styles from "@/features/about/components/Stack.module.scss";
//Animations
import { motion } from "motion/react";

export const stackContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const stackIconsVariants = {
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
  },
  hidden: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  transition: {
    type: "spring",
    stiffness: 100,
  },
};

const Stack = () => {
  return (
    <motion.div
      className={styles.stackContainer}
      variants={stackContainerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <h3>My stack</h3>
      <div className={styles.icons}>
        <motion.div
          className={styles.iconContainer}
          variants={stackIconsVariants}
        >
          <Image
            src="/images/stack/javascript-icon.svg"
            alt="My stack"
            fill
            className={styles.stackImage}
          />
          <p>Javascript</p>
        </motion.div>
        <motion.div
          className={styles.iconContainer}
          variants={stackIconsVariants}
        >
          <Image
            src="/images/stack/typescript-icon.svg"
            alt="My stack"
            fill
            className={styles.stackImage}
          />
          <p>Typescript</p>
        </motion.div>
        <motion.div
          className={styles.iconContainer}
          variants={stackIconsVariants}
        >
          <Image
            src="/images/stack/html-icon.svg"
            alt="My stack"
            fill
            className={styles.stackImage}
          />
          <p>HTML</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stack;
