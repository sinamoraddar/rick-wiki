"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { use, useEffect, useState } from "react";
import Card from "./components/Card/Card";

const fetchCharacters = async () => {
  try {
    const result = await fetch("https://rickandmortyapi.com/api/character");

    return result.json();
  } catch (e) {}
};

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const { results } = await fetchCharacters();

    console.log(results);
    setCharacters(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <header>
        <div>
          Ricki morty wiki
          <p>List of characters</p>
        </div>

        <div>
          <span>
            Alive:{" "}
            {
              characters.filter((character) => character.status === "Alive")
                .length
            }
          </span>{" "}
          <span>
            Dead:{" "}
            {
              characters.filter((character) => character.status === "Dead")
                .length
            }
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
      {characters.length > 0 &&
        characters.map((character: any) => (
          <div key={character.id}>
            {character.image !== "" && (
              <img src={character.image} alt={character.name} />
            )}
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.species}</p>
          </div>
        ))}
      asds
    </main>
  );
}
