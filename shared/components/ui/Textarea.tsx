import React from "react";

//Styles
import styles from "@/shared/components/ui/Textarea.module.scss";

interface TextareaProps {
  id: string;
  label: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={10}
        className={styles.input}
      />
    </div>
  );
};

export default Textarea;
