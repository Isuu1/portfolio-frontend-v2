import React from "react";

//Styles
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
