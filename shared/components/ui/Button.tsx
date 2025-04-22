import React from "react";

//Styles
import styles from "@/shared/components/ui/Button.module.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = "default",
  onClick,
  className,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
