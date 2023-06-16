"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { use, useCallback, useEffect, useRef, useState } from "react";
import Card from "./components/Card/Card";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";

interface CharacterShape {
  id: 581;
  name: "Anchosnake";
  status: "Alive";
  species: "Animal";
  type: "Snake";
  gender: "Male";
  origin: {
    name: "Snake Planet";
    url: "https://rickandmortyapi.com/api/location/78";
  };
  location: {
    name: "Snake Planet";
    url: "https://rickandmortyapi.com/api/location/78";
  };
  image: "https://rickandmortyapi.com/api/character/avatar/581.jpeg";
  episode: ["https://rickandmortyapi.com/api/episode/36"];
  url: "https://rickandmortyapi.com/api/character/581";
  created: "2020-05-07T12:24:45.750Z";
}

const fetchCharacters = async (page: number) => {
  try {
    const result = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    return result.json();
  } catch (e) {}
};

export default function Home() {
  const [characters, setCharacters] = useState<CharacterShape[]>([]);
  const currentPage = useRef(1);
  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const fetchData = useCallback(async () => {
    if (loading || isFinished) {
      return;
    }
    try {
      setLoading(true);
      const data: any = await fetchCharacters(currentPage.current);
      if (data?.error) {
        setIsFinished(true);
        return;
      }
      setCharacters((characters: any) => [...characters, ...data.results]);
      currentPage.current = currentPage.current + 1;
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [isFinished, loading]);

  return (
    <main className={styles.Main}>
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
      <section className={styles.CardContainer}>
        {characters.length > 0 &&
          characters.map((character: any) => (
            <Card key={character.id} info={character} />
          ))}
      </section>

      {!isFinished && (
        <button onClick={fetchData}>{loading ? "loading" : "fetch"}</button>
      )}
    </main>
  );
}
