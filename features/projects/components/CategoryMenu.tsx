"use client";

import React, { useEffect, useState } from "react";

//Animations
import { motion } from "motion/react";

//Styles
import styles from "@/features/projects/components/CategoryMenu.module.css";
import { getCategories } from "@/sanity/lib/queries/getCategories";
import { Category } from "@/shared/types/category";

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
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [category, setCategory] = useState<string>("All");

  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  function handleCatChange(cat: string) {
    setCategory(cat);
  }

  console.log("categoryList", categoryList);

  useEffect(() => {
    setIsLoading(true);
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategoryList(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
        //setError("Failed to load categories");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <motion.ul
        className={styles.categoryMenu}
        whileInView="visible"
        initial="hidden"
        variants={categoryMenuVariants}
      >
        <motion.li className={styles.item} variants={categoryMenuItemVariants}>
          placeholder
        </motion.li>
      </motion.ul>
    );
  }

  return (
    <motion.ul
      className={styles.categoryMenu}
      whileInView="visible"
      initial="hidden"
      variants={categoryMenuVariants}
    >
      {categoryList.map((cat) => (
        <motion.li
          key={cat._id}
          onClick={() => handleCatChange(cat.title)}
          className={`${styles.item} ${category === cat.title && styles.active}`}
          variants={categoryMenuItemVariants}
        >
          {cat.title}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default CategoryMenu;
