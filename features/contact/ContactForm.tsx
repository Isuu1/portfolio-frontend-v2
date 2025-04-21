import React from "react";

//Styles
import styles from "@/features/contact/ContactForm.module.scss";
//Components
import Button from "@/shared/components/ui/Button";
//Icons
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Input from "@/shared/components/ui/Input";

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <Input id="name" type="text" label="Name" icon={<FaUser />} />
      <Input id="email" type="email" label="Email" icon={<MdEmail />} />
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
