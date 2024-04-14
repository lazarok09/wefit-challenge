"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../app/lib/store";

export const Items = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return <p> {count} itens</p>;
};
