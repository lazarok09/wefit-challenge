"use client";

import { ProductCartCard } from "@/components/ProductCartCard";
import type { RootState } from "../../app/lib/store";

import { useSelector } from "react-redux";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { useRouter } from "next/navigation";

export const CartContainer = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const router = useRouter();
  if (!products.length) {
    return (
      <MoviesNotFounded
        onLabelClick={() => router.push("/")}
        label={"Voltar"}
      />
    );
  }

  return products.map((currentProduct, index) => {
    const productsAtCart = products.filter((p) => p.id === currentProduct.id);
    const productQuantity = productsAtCart?.length;

    const subTotal = productsAtCart.reduce((previousState, current) => {
      if (Number.isSafeInteger(current)) {
        return (previousState += current.price);
      }
      return previousState;
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
