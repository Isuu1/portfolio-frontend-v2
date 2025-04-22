import React from "react";

//Styles
import styles from "@/features/contact/Contact.module.scss";
//Icons
import { MdEmail } from "react-icons/md";
import { FaCodepen } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
//Components
import Button from "@/shared/components/ui/Button";
import SectionHeadline from "@/shared/components/SectionHeadline";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
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

          <Button
            className={styles.emailButton}
            text="Send me an email"
            icon={<MdEmail />}
          />

          <h3>Find me on social media</h3>
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
