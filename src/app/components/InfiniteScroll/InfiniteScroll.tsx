"use client";
import React, { useCallback, useEffect, useState } from "react";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
type Props = {
  fetchData: any;
};

const InfiniteScroll = ({ fetchData }: Props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 0.5 !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

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
