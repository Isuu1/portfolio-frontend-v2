import React from "react";

//Styles
import styles from "@/shared/components/ui/Button.module.scss";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant: "primary" | "secondary";
  filled?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant,
  filled = true,
  onClick,
  className,
  disabled,
}) => {
  const fillStyleClass = filled ? styles.filled : styles.outlined;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${fillStyleClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
