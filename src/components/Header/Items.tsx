"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";

export const HeaderProductQuantity = () => {
  const count = useSelector((state: RootState) => state.products.products);
  console.log(count?.length);
  return <p> {count?.length} itens</p>;
};
