"use client";

import type { RootState } from "@/app/lib/store";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/lib/hooks";
import {
  addToCart,
  removeAllFromCart,
  removeFromCart,
} from "@/app/lib/features/counter/productsSlice";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Steps = "cart" | "successPurchase";

export const useCartContainer = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [step, setStep] = useState<Steps>("cart");

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
  const handleRemoveAllProduct = (product: Movie) => {
    dispatch(removeAllFromCart(product));
  };
  const handlePurchase = (product: Movie) => {
    setStep("successPurchase");
    dispatch(removeAllFromCart(product));
  };
  const handleBackToCart = () => {
    setStep("cart");
  };

  return {
    handleAddProduct,
    handleRemoveProcuct,
    filteredProducts,
    products,
    onLabelClick,
    step,
    handlePurchase,
    handleBackToCart,
    handleRemoveAllProduct,
  };
};
