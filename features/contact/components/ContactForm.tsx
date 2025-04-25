"use client";

import React, { useActionState, useEffect, useState } from "react";

//Styles
import styles from "@/features/contact/components/ContactForm.module.scss";
//Components
import Button from "@/shared/components/ui/Button";
import Error from "@/shared/components/Error";
import Input from "@/shared/components/ui/Input";
import Textarea from "@/shared/components/ui/Textarea";
//Icons
import { IoSend } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//Actions
import { sendContactForm } from "../lib/actions/sendContactForm";
//Types
import { ContactFormState } from "../types/contactForm";
//Animations
import { motion } from "motion/react";

const initialState: ContactFormState = {
  success: false,
  data: { name: "", email: "", message: "" },
  error: null,
  resetKey: Date.now(),
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

const successMessageVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState
  );

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (state.error) {
      setError(state.error);
    }
  }, [state.error, state.resetKey]);

  return state.success ? (
    <motion.div
      className={styles.successMessage}
      variants={successMessageVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thanks for reaching out!</h2>
      <h3>I`ve received your message and will get back to you soon.</h3>
    </motion.div>
  ) : (
    <motion.form
      action={formAction}
      className={styles.contactForm}
      variants={contactFormVariants}
      initial="hidden"
      whileInView="visible"
    >
      <Input
        id="name"
        type="text"
        label="Name"
        icon={<FaUser />}
        onFocus={() => setError(null)}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        icon={<MdEmail />}
        onFocus={() => setError(null)}
      />
      <Textarea id="message" label="Message" />

      {error && <Error errorMessage={error} />}

      <Button
        variant="primary"
        className={styles.submitButton}
        text={isPending ? "Sending..." : "Send"}
        icon={<IoSend />}
        disabled={isPending}
      />
    </motion.form>
  );
};

export default ContactForm;
