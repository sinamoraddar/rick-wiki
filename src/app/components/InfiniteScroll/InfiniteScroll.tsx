"use client";
import React, { useCallback, useEffect } from "react";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

type Props = {
  fetchData: () => void;
};
const InfiniteScroll = ({ fetchData }: Props) => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData?.();
    }
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
};

export default InfiniteScroll;
