"use client";

import React from "react";

//Styles
import styles from "@/features/about/components/About.module.scss";
import Image from "next/image";
import SectionHeadline from "@/shared/components/SectionHeadline";

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
        <div className={styles.aboutMe}>
          <p>
            Hi, I`m Jakub, an aspiring Full-Stack Software Engineer with a deep
            passion for technology and coding.
          </p>
          <p>
            I transitioned into this field because I thrive on constant
            learning, solving real-world problems, and embracing new challenges.
            I`m currently mastering Next.js and TypeScript, driven by the
            excitement of building dynamic, user-focused applications. My
            background has given me strong problem-solving and organisational
            skills, which I love applying to complex coding challenges. When I`m
            not immersed in code, you can usually find me out on a bike trip,
            recharging for the next big project.
          </p>
          <h3>Get in touch and let`s bring your ideas to life!</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
