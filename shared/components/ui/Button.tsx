import React from "react";

//Styles
import styles from "@/shared/components/ui/Button.module.css";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant = "default" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {text}
      <span>{icon}</span>
    </button>
  );
};

export default Button;
