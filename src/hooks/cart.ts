"use client";

import type { RootState } from "@/app/lib/store";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/lib/hooks";
import {
  addToCart,
  removeFromCart,
} from "@/app/lib/features/counter/productsSlice";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export const useCartContainer = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    const uniqueProductsMap = new Map<number, Movie>();
    products.forEach((item) => {
      uniqueProductsMap.set(item.id, item);
    });
    return Array.from(uniqueProductsMap.values());
  }, [products]);

  const handleAddProduct = (currentProduct: Movie) => {
    dispatch(addToCart(currentProduct));
  };

  const handleRemoveProcuct = (currentProduct: Movie) => {
    dispatch(removeFromCart(currentProduct));
  };
  const onLabelClick = () => {
    router.push("/");
  };
  return {
    handleAddProduct,
    handleRemoveProcuct,
    filteredProducts,
    products,
    onLabelClick,
  };
};
