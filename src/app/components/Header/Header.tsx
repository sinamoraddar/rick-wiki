"use client";
import { CharacterShape } from "@/app/page";
import styles from "./Header.module.scss";
import HeaderSkeleton from "../HeaderSkeleton/HeaderSkeleton";

const Header = ({ characters }: { characters: CharacterShape[] }) => {
  return (
    <header className={styles.Header}>
      <div>
        <h1>Ricki morty wiki</h1>
        <p>List of characters</p>
      </div>

      <div className={styles.Statistics}>
        <span>
          Alive:{" "}
          {
            characters.filter((character) => character.status === "Alive")
              .length
          }
        </span>{" "}
        <span>
          Dead:{" "}
          {characters.filter((character) => character.status === "Dead").length}
        </span>{" "}
        <span>
          Unknown:{" "}
          {
            characters.filter((character) => character.status === "unknown")
              .length
          }
        </span>
      </div>
    </header>
  );
};

export default Header;
