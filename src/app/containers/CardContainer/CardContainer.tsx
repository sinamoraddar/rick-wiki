import dynamic from "next/dynamic";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import styles from "./CardContainer.module.scss";
import { use, useCallback, useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import { CharacterShape } from "@/app/utils";
import { fetchCharacters } from "@/app/api";

// lazy loading
const LazyCard = dynamic(() => import("../../components/Card/Card"), {
  loading: () => <CardSkeleton />,
});
const LazyInfiniteScroll = dynamic(
  () => import("../../components/InfiniteScroll/InfiniteScroll"),
  {
    loading: () => <CardSkeleton />,
  }
);

const CardContainer = () => {
  const [characters, setCharacters] = useState<CharacterShape[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [page, setPage] = useState(1);

  // callbacks
  const fetchData = useCallback(async () => {
    if (loading || isFinished) {
      return;
    }

    try {
      setLoading(true);

      const data: { results: CharacterShape[]; error?: string } =
        await fetchCharacters(page);

      if (data?.error) {
        setIsFinished(true);

        return;
      } else {
        setCharacters((characters) => [...characters, ...data?.results]);
        setPage((page) => page + 1);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [isFinished, loading, page]);

  useEffect(() => {
    fetchData?.();
  }, []);

  return (
    <>
      <Header characters={characters} />
      <section className={styles.CardContainer}>
        {characters.length > 0 &&
          characters.map((character) => (
            <LazyCard key={character.id} info={character} />
          ))}
        {!isFinished && <LazyInfiniteScroll fetchData={fetchData} />}
      </section>
    </>
  );
};

export default CardContainer;
