"use client";

import React, { useEffect, useState } from "react";

//Animations
import { motion } from "motion/react";
//Styles
import styles from "@/features/projects/components/CategoryMenu.module.css";
//Utils
import { getCategories } from "@/sanity/lib/queries/getCategories";
//Types
import { Category } from "@/shared/types/category";
//Components
import Error from "@/shared/components/Error";

export const categoryMenuVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
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

interface CategoryMenuProps {
  activeCategory: string;
  changeCategory: (category: string) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  activeCategory,
  changeCategory,
}) => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategoryList(res);
      } catch (error) {
        console.error(error);
        setError(`Failed to load categories`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (error) {
    return <Error errorMessage={error} />;
  }

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
          onClick={() => changeCategory(cat.title)}
          className={`${styles.item} ${activeCategory === cat.title && styles.active}`}
          variants={categoryMenuItemVariants}
        >
          {cat.title}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default CategoryMenu;
