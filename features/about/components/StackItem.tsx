"use client";

import React from "react";
//Styles
import styles from "@/features/about/components/StackItem.module.scss";
//Animations
import { motion } from "motion/react";
import { Stack } from "@/shared/types/stack";
import Image from "next/image";

export const stackItemVariants = {
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

interface StackItemProps {
  stackItem: Stack;
}

const StackItem: React.FC<StackItemProps> = ({ stackItem }) => {
  return (
    <motion.div
      key={stackItem._id}
      className={styles.stackItem}
      variants={stackItemVariants}
    >
      <Image
        src={stackItem.icon.asset.url}
        alt="My stack"
        fill
        className={styles.image}
      />
      <p>{stackItem.title}</p>
    </motion.div>
  );
};

export default StackItem;
