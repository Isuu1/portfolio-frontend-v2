import React from "react";

//Styles
import styles from "@/shared/components/Error.module.scss";
//Icons
import { BiSolidMessageError } from "react-icons/bi";

interface ErrorProps {
  errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className={styles.errorContainer}>
      <i className={styles.icon}>
        <BiSolidMessageError />
      </i>
      <p className={styles.message}>{errorMessage}</p>
    </div>
  );
};

export default Error;
