"use client";

import { useGetMoviesQuery } from "@/app/lib/features/counter/moviesApi";
import { Loading } from "@/components/Loading";
import { MovieCard } from "@/components/MovieCard";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";

export const MoviesContainer = () => {
  const { error, isLoading, data } = useGetMoviesQuery();

  const quantityAtCart = useSelector(
    (state: RootState) => state.products.products.length
  );

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
          id={movie.id}
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
