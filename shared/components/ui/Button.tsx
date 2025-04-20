import React from "react";

//Styles
import styles from "@/shared/components/ui/Button.module.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = "default",
  onClick,
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
