"use client";

import { useGetMoviesQuery } from "@/app/lib/features/counter/counterApi";
import { Loading } from "@/components/Loading";
import { MovieCard } from "@/components/MovieCard";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";

export const MoviesContainer = () => {
  const { error, isLoading, data } = useGetMoviesQuery();

  const quantityAtCart = useSelector((state: RootState) => state.counter.value);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <MoviesNotFounded />;
  }
  return (
    <Fragment>
      {data?.map((movie, index) => (
        <MovieCard
          image={{
            alt: `${movie.title} - ${movie.title} em BlueRay`,
            src: movie.image,
          }}
          price={movie.price}
          quantityAtCart={quantityAtCart}
          title={movie.title}
          key={index}
        />
      ))}
    </Fragment>
  );
};
