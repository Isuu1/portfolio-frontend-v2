import React from "react";

//Styles
import styles from "@/shared/components/ui/Input.module.scss";

interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  icon,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
        <span className={styles.icon}>{icon}</span>
      </div>
    </div>
  );
};

export default Input;
