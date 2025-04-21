import React from "react";

//Styles
import styles from "@/features/contact/ContactForm.module.scss";
//Components
import Button from "@/shared/components/ui/Button";
//Icons
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <label htmlFor="name">Name</label>
      <div className={styles.inputContainer}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className={styles.input}
        />
        <span className={styles.inputIcon}>
          <FaUser />
        </span>
      </div>
      <label htmlFor="email">Email</label>
      <div className={styles.inputContainer}>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="johndoe@email.com"
          className={styles.input}
        />
        <span className={styles.inputIcon}></span>
      </div>
      <label htmlFor="message">Message</label>
      <div className={styles.inputContainer}>
        <textarea
          id="message"
          name="message"
          className={styles.textArea}
          rows={4}
          cols={50}
        />
      </div>
      <Button variant="secondary" text="Send" icon={<IoSend />} />
    </form>
  );
};

export default ContactForm;
