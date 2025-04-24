"use client";

import React from "react";

//Styles
import styles from "@/features/contact/components/Contact.module.scss";
//Icons
import { FaCodepen } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
//Components
import SectionHeadline from "@/shared/components/SectionHeadline";
import ContactForm from "./ContactForm";
//Animations
import { motion } from "motion/react";

export const contactDetailsVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const contactDetailsItemsVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <SectionHeadline sectionName="Contact me" />
      <div className={styles.innerWrapper}>
        <ContactForm />
        <motion.div
          className={styles.contactDetails}
          variants={contactDetailsVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2 variants={contactDetailsItemsVariants}>
            Get in touch
          </motion.h2>
          <motion.p variants={contactDetailsItemsVariants}>
            If you have any questions about my projects or you would like to
            work with me feel free to use my contact details or the contact
            form.
          </motion.p>
          <motion.h3 variants={contactDetailsItemsVariants}>
            Find Me Online
          </motion.h3>
          <motion.div
            className={styles.icons}
            variants={contactDetailsItemsVariants}
          >
            <i className={styles.icon}>
              <FaCodepen />
            </i>
            <i className={styles.icon}>
              <FaGithub />
            </i>
            <i className={styles.icon}>
              <FaLinkedin />
            </i>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
