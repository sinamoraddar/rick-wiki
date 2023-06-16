import React from "react";
import styles from "./Card.module.scss";

const Card = ({ info }: { info: any }) => {
  return (
    <div className={styles.Card}>
      {info.image !== "" && <img src={info.image} alt={info.name} />}
      <div className={styles.Info}>
        <h3 className={styles.Name}>{info.name}</h3>
        <p className={`${styles.Status} ${styles.Tag}`}>{info.status}</p>
        <div className={styles.Tags}>
          <span className={styles.Tag}>{info.gender}</span>
          <span className={styles.Tag}>{info.species}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
