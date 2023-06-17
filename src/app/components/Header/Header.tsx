import { useMemo } from "react";
import { CharacterShape, categorizeByStatus } from "@/app/utils";
import styles from "./Header.module.scss";

const Header = ({ characters }: { characters: CharacterShape[] }) => {
  const categorizedCharacters = useMemo(
    () => categorizeByStatus(characters),
    [characters]
  );

  return (
    <header className={styles.Header}>
      <div>
        <h1>Ricki morty wiki</h1>
        <p>List of characters</p>
      </div>

      <div className={styles.Statistics}>
        <span>Alive: {categorizedCharacters.alive}</span>{" "}
        <span>Dead: {categorizedCharacters.dead} </span>{" "}
        <span>Unknown: {categorizedCharacters.unknown}</span>
      </div>
    </header>
  );
};

export default Header;
