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

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <SectionHeadline sectionName="Contact me" />
      <div className={styles.innerWrapper}>
        <ContactForm />
        <div className={styles.contactDetails}>
          <h2>Get in touch</h2>
          <p>
            If you have any questions about my projects or you would like to
            work with me feel free to use my contact details or the contact
            form.
          </p>
          <h3>Find Me Online</h3>
          <div className={styles.icons}>
            <i className={styles.icon}>
              <FaCodepen />
            </i>
            <i className={styles.icon}>
              <FaGithub />
            </i>
            <i className={styles.icon}>
              <FaLinkedin />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
