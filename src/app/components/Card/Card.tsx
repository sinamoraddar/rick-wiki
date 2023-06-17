import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import { CharacterShape } from "@/app/utils";

const Card = ({ info }: { info: CharacterShape }) => {
  return (
    <div className={styles.Card}>
      {info.image !== "" && (
        <Image
          className={styles.Image}
          src={info.image}
          alt={info.name}
          width={300}
          height={300}
          priority
        />
      )}
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
