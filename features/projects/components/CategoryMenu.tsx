"use client";

import React, { useState } from "react";

//Animations
import { motion } from "motion/react";

//Styles
import styles from "@/features/projects/CategoryMenu.module.css";

export const categoryMenuVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  hidden: {},
};

const categoryMenuItemVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const CategoryMenu = () => {
  const [category, setCategory] = useState<string>("All");

  function handleCatChange(cat: string) {
    setCategory(cat);
  }

  return (
    <motion.ul
      className={styles.categoryMenu}
      whileInView="visible"
      initial="hidden"
      variants={categoryMenuVariants}
    >
      <motion.li
        onClick={() => handleCatChange("All")}
        className={`${styles.item} ${category === "All" && styles.active}`}
        variants={categoryMenuItemVariants}
      >
        All
      </motion.li>
      <motion.li
        onClick={() => handleCatChange("Web")}
        className={`${styles.item} ${category === "Web" && styles.active}`}
        variants={categoryMenuItemVariants}
      >
        Web
      </motion.li>
      <motion.li
        onClick={() => handleCatChange("Ecommerce")}
        className={`${styles.item} ${category === "Ecommerce" && styles.active}`}
        variants={categoryMenuItemVariants}
      >
        Ecommerce
      </motion.li>
      <motion.li
        onClick={() => handleCatChange("Mobile")}
        className={`${styles.item} ${category === "Mobile" && styles.active}`}
        variants={categoryMenuItemVariants}
      >
        Mobile
      </motion.li>
    </motion.ul>
  );
};

export default CategoryMenu;
