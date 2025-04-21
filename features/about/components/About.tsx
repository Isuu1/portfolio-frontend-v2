"use client";

import React from "react";

//Styles
import styles from "@/features/about/components/About.module.scss";
import Image from "next/image";
import SectionHeadline from "@/shared/components/SectionHeadline";
//Animations
import { motion } from "motion/react";

export const aboutMeVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const aboutMeItemsVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <SectionHeadline sectionName="About me" />
      <div className={styles.info}>
        <Image
          src="/images/myself.webp"
          alt="Myself"
          fill
          className={styles.image}
        />
        <motion.div
          className={styles.aboutMe}
          initial="hidden"
          whileInView="visible"
          variants={aboutMeVariants}
        >
          <motion.p variants={aboutMeItemsVariants}>
            Hi, I`m Jakub, an aspiring Full-Stack Software Engineer with a deep
            passion for technology and coding.
          </motion.p>
          <motion.p variants={aboutMeItemsVariants}>
            I transitioned into this field because I thrive on constant
            learning, solving real-world problems, and embracing new challenges.
            I`m currently mastering Next.js and TypeScript, driven by the
            excitement of building dynamic, user-focused applications. My
            background has given me strong problem-solving and organisational
            skills, which I love applying to complex coding challenges. When I`m
            not immersed in code, you can usually find me out on a bike trip,
            recharging for the next big project.
          </motion.p>
          <motion.h3 variants={aboutMeItemsVariants}>
            Get in touch and let`s bring your ideas to life!
          </motion.h3>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
