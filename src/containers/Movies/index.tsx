"use client";

import { useGetMoviesQuery } from "@/app/lib/features/counter/moviesApi";
import { Loading } from "@/components/Loading";
import { MovieCard } from "@/components/MovieCard";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";
import { useAppDispatch } from "@/app/lib/hooks";
import { addToCart } from "@/app/lib/features/counter/productsSlice";
import { Fragment } from "react";

export const MoviesContainer = () => {
  const { error, isLoading, data, refetch } = useGetMoviesQuery();

  const productsAtCart = useSelector(
    (state: RootState) => state.products.products
  );

  const dispatch = useAppDispatch();
  if (isLoading) {
    return <Loading />;
  }
  if (error || !data?.length) {
    return (
      <MoviesNotFounded
        onLabelClick={() => refetch()}
        label="Recarregar página"
      />
    );
  }
  return (
    <Fragment>
      {data?.map((movie, index) => {
        const quantityAtCart = productsAtCart.filter(
          (product) => product.id === movie.id
        )?.length;
        return (
          <MovieCard
            id={movie.id}
            isActionButtonGreen={quantityAtCart >= 1}
            image={movie.image}
            handleAddToTheCart={() =>
              dispatch(
                addToCart({
                  id: movie.id,
                  title: movie.title,
                  image: movie.image,
                  price: movie.price,
                })
              )
            }
            price={movie.price}
            quantityAtCart={quantityAtCart}
            title={movie.title}
            key={index}
          />
        );
      })}
    </Fragment>
  );
};
