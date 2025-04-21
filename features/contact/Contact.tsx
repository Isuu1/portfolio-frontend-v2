import React from "react";

//Styles
import styles from "@/features/contact/Contact.module.scss";
import SectionHeadline from "@/shared/components/SectionHeadline";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <SectionHeadline sectionName="Contact me" />
      <div className={styles.innerWrapper}>
        <ContactForm />
        <h1>contact details</h1>
      </div>
    </div>
  );
};

export default Contact;
