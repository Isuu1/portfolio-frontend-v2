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
      <div className={styles.bgShape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
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
