"use client";

import React from "react";
import Link from "next/link";

//Styles
import styles from "@/features/headline/components/Headline.module.scss";
//Components
import TypingAnimation from "./TypingAnimation";
import Button from "@/shared/components/ui/Button";
import ParticlesBackground from "./ParticlesBackground";
//Icons
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Headline = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    console.log("scrollToSection", id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // optionally remove the hash from the URL
      history.replaceState(null, "", location.pathname);
    }
  };

  return (
    <div className={styles.headlineContainer}>
      <ParticlesBackground />
      <h1>Hello there, my name is Jakub. I`m a</h1>
      <TypingAnimation />
      <div className={styles.buttons}>
        <Button
          variant="secondary"
          filled={false}
          text="My work"
          icon={<TbArrowBigDownLineFilled />}
          onClick={() => scrollToSection("projects")}
        />
        <Link href="https://github.com/Isuu1">
          <Button variant="primary" text="GitHub" icon={<FaGithub />} />
        </Link>
      </div>
    </div>
  );
};

export default Headline;
