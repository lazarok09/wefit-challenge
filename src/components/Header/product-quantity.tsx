"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";
import * as Styled from "./styles";

export const HeaderProductQuantity = () => {
  const count = useSelector((state: RootState) => state.products.products);
  return <Styled.CartInfo> {count?.length} itens</Styled.CartInfo>;
};
