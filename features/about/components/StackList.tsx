"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

//Styles
import styles from "@/features/about/components/StackList.module.scss";
//Animations
import { motion } from "motion/react";
//Data fetching
import { getStack } from "@/sanity/lib/queries/getStack";
//Types
import { Stack } from "@/shared/types/stack";
//Components
import SectionHeadline from "@/shared/components/SectionHeadline";

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

const StackList = () => {
  const [stackList, setStackList] = useState<Stack[] | null>(null);

  console.log("Stack:", stackList);

  useEffect(() => {
    const fetchStack = async () => {
      try {
        const response = await getStack();
        if (!response) {
          throw new Error("Failed to fetch stack");
        }

        setStackList(response);
      } catch (error) {
        console.error("Error fetching stack:", error);
        throw new Error("Failed to fetch stack");
      }
    };
    fetchStack();
  }, []);

  return (
    <div className={styles.stackContainer}>
      <SectionHeadline sectionName="My stack" />

      <motion.div
        className={styles.stackList}
        variants={stackContainerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {/* <h3>My stack</h3> */}

        <div className={styles.icons}>
          {stackList &&
            stackList.map((item) => (
              <motion.div
                key={item._id}
                className={styles.iconContainer}
                variants={stackIconsVariants}
              >
                <Image
                  src={item.icon.asset.url}
                  alt="My stack"
                  fill
                  className={styles.stackImage}
                />
                <p>{item.title}</p>
              </motion.div>
            ))}
          {/* <motion.div
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
        </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default StackList;
