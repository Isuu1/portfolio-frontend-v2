"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

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

const categoryTitles: { [key: string]: string } = {
  frontend: "Frontend",
  backend: "Backend",
  "headless-cms": "Headless CMS",
  databases: "Databases",
  languages: "Languages",
  styling: "Styling",
  "tools-utilities": "Tools & Utilities",
  testing: "Testing",
  devops: "DevOps",
};

const StackList = () => {
  const [stackList, setStackList] = useState<Stack[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log("Stack:", stackList);

  useEffect(() => {
    const fetchStack = async () => {
      setIsLoading(true);
      try {
        const response = await getStack();
        if (!response) {
          throw new Error("Failed to fetch stack");
        }

        setStackList(response);
      } catch (error) {
        console.error("Error fetching stack:", error);
        throw new Error("Failed to fetch stack");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStack();
  }, []);

  // Group stack items by category using useMemo
  const groupedStack = useMemo(() => {
    if (!stackList) return {}; // Return empty object if no data

    // Use reduce to group items by category
    const groups = stackList.reduce(
      (acc, item) => {
        const category = item.category || "uncategorized"; // Fallback for items without category
        if (!acc[category]) {
          acc[category] = []; // Initialize array if category not seen before
        }
        acc[category].push(item);
        return acc;
      },
      {} as { [key: string]: Stack[] }
    );
    return groups;
  }, [stackList]);

  if (isLoading) {
    return (
      <div className={styles.stackContainer}>
        <SectionHeadline sectionName="My stack" />
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <div className={styles.stackContainer}>
      <SectionHeadline sectionName="My stack" />
      <div className={styles.stackListWrapper}>
        {Object.entries(groupedStack).map(([category, items]) => (
          <motion.div
            key={category}
            className={styles.stackList}
            variants={stackContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3>{categoryTitles[category] || category}</h3>
            <div className={styles.itemsContainer}>
              {items.map((item) => (
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackList;
