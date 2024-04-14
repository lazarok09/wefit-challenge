"use client";

import { ProductCartCard } from "@/components/ProductCartCard";
import type { RootState } from "../../app/lib/store";

import { useSelector } from "react-redux";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export const CartContainer = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    const uniqueProductsMap = new Map<number, Movie>();
    products.forEach((item) => {
      uniqueProductsMap.set(item.id, item);
    });
    return Array.from(uniqueProductsMap.values());
  }, [products]);

  if (!products.length) {
    return (
      <MoviesNotFounded
        onLabelClick={() => router.push("/")}
        label={"Voltar"}
      /> 
    );
  }

  return filteredProducts?.map((currentProduct, index) => {
    const productsAtCart = products.filter((p) => p.id === currentProduct.id);
    const productQuantity = productsAtCart?.length;

    const subTotal = productsAtCart.reduce((previousState, current) => {
      return (previousState += current.price);
    }, 0);

    return (
      <ProductCartCard
        price={currentProduct.price}
        productQuantity={productQuantity}
        subTotal={subTotal}
        key={index}
        title={`${currentProduct.title} - Assista ${currentProduct.title} em BlueRay`}
      />
    );
  });
};
