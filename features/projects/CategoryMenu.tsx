"use client";

import React, { useState } from "react";

//Animations
import { motion } from "motion/react";

//Styles
import styles from "@/features/projects/CategoryMenu.module.css";

const CategoryMenu = () => {
  const [category, setCategory] = useState<string>("All");

  //Changing visibility of projects and changing category using search params
  function handleCatChange(cat: string) {
    setCategory(cat);
  }

  return (
    <motion.ul
      className={styles.categoryMenu}
      whileInView={"visible"}
      initial="hidden"
      //variants={childDelayTopSpring}
    >
      <motion.li
        onClick={() => handleCatChange("All")}
        className={`${styles.item} ${category === "All" && styles.active}`}
        //   className={`projects-container__type-selector__button ${
        //     typeFilter === "All" ? "selected" : null // Adding class 'selected' to the button
        //   }`}
        //   variants={opacityAnimation}
      >
        All
      </motion.li>
      <motion.li
        onClick={() => handleCatChange("Web")}
        className={`${styles.item} ${category === "Web" && styles.active}`}
        //   className={`projects-container__type-selector__button ${
        //     typeFilter === "Web" ? "selected" : ""
        //   }`}
        //   variants={opacityAnimation}
      >
        Web
      </motion.li>
      <motion.li
        onClick={() => handleCatChange("Ecommerce")}
        className={`${styles.item} ${category === "Ecommerce" && styles.active}`}
        //   className={`projects-container__type-selector__button ${
        //     typeFilter === "Ecommerce" ? "selected" : ""
        //   }`}
        //   variants={opacityAnimation}
      >
        Ecommerce
      </motion.li>
      <motion.li
        onClick={() => handleCatChange("Mobile")}
        className={`${styles.item} ${category === "Mobile" && styles.active}`}
        //   variants={opacityAnimation}
      >
        Mobile
      </motion.li>
    </motion.ul>
  );
};

export default CategoryMenu;
