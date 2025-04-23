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

const initialState: ContactFormState = {
  success: false,
  data: { name: "", email: "", message: "" },
  error: null,
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState
  );

  console.log("Form state:", state);

  return (
    <form action={formAction} className={styles.contactForm}>
      <Input id="name" type="text" label="Name" icon={<FaUser />} />
      <Input id="email" type="email" label="Email" icon={<MdEmail />} />
      <Textarea id="message" label="Message" />
      <Button
        variant="primary"
        className={styles.submitButton}
        text={isPending ? "Sending..." : "Send"}
        icon={<IoSend />}
      />
    </form>
  );
};

export default ContactForm;
