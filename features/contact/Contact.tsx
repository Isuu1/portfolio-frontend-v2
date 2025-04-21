import React from "react";

//Styles
import styles from "@/features/contact/Contact.module.scss";
import SectionHeadline from "@/shared/components/SectionHeadline";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <SectionHeadline sectionName="Contact me" />
      <h1>contact test</h1>
    </div>
  );
};

export default Contact;
