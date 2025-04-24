"use client";

import React, { useActionState } from "react";

//Styles
import styles from "@/features/contact/components/ContactForm.module.scss";
//Components
import Button from "@/shared/components/ui/Button";
//Icons
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Input from "@/shared/components/ui/Input";
import Textarea from "@/shared/components/ui/Textarea";
import { sendContactForm } from "../lib/actions/sendContactForm";
import { ContactFormState } from "../types/contactForm";
//Animations
import { motion } from "motion/react";

const initialState: ContactFormState = {
  success: false,
  data: { name: "", email: "", message: "" },
  error: null,
};

const contactFormVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState
  );

  console.log("state", state);

  return (
    <motion.form
      action={formAction}
      className={styles.contactForm}
      variants={contactFormVariants}
      initial="hidden"
      whileInView="visible"
    >
      <Input id="name" type="text" label="Name" icon={<FaUser />} />
      <Input id="email" type="email" label="Email" icon={<MdEmail />} />
      <Textarea id="message" label="Message" />
      <Button
        variant="primary"
        className={styles.submitButton}
        text={isPending ? "Sending..." : "Send"}
        icon={<IoSend />}
      />
    </motion.form>
  );
};

export default ContactForm;
