import React from "react";
import styles from "./HeaderSkeleton.module.scss";

const HeaderSkeleton = () => {
  return (
    <header className={styles.HeaderSkeleton}>
      <div className={styles.Title}>
        <div className={styles.skeleton}></div>

        <div className={styles.skeleton}></div>
      </div>

      <div className={styles.Statistics}>
        <div className={styles.skeleton}></div>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
