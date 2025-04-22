"use client";

import React from "react";

//Styles
import styles from "@/shared/components/Header.module.scss";

const Header = () => {
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
    <header className={styles.header}>
      <h2 onClick={() => window.scrollTo(0, 0)}>Jakub Babelek</h2>
      <nav>
        <ul className={styles.navMenu}>
          <li
            className={styles.navItem}
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className={styles.navItem}
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className={styles.navItem}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>

          <li
            className={styles.navItem}
            onClick={() => scrollToSection("projects")}
          >
            My work
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
