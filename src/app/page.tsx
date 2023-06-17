"use client";

import styles from "./page.module.scss";
import { use, useCallback, useEffect, useRef, useState } from "react";
import Card from "./components/Card/Card";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import CardSkeleton from "./components/CardSkeleton/CardSkeleton";
import HeaderSkeleton from "./components/HeaderSkeleton/HeaderSkeleton";

export interface CharacterShape {
  id: 581;
  name: "Anchosnake";
  status: "Alive" | "Dead" | "unknown";
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

// lazy loading
const LazyCard = dynamic(() => import("./components/Card/Card"), {
  loading: () => <CardSkeleton />,
});
const LazySkeleton = dynamic(
  () => import("./components/InfiniteScroll/InfiniteScroll"),
  {
    loading: () => <CardSkeleton />,
  }
);
const LazyHeader = dynamic(() => import("./components/Header/Header"), {
  loading: () => <HeaderSkeleton />,
});

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
      <LazyHeader characters={characters} />
      {newFunction(characters, isFinished, fetchData)}
    </main>
  );
}
function newFunction(
  characters: CharacterShape[],
  isFinished: boolean,
  fetchData: () => Promise<void>
) {
  return (
    <section className={styles.CardContainer}>
      {characters.length > 0 &&
        characters.map((character: any) => (
          <LazyCard key={character.id} info={character} />
        ))}
      {!isFinished && <LazySkeleton fetchData={fetchData} />}
    </section>
  );
}
