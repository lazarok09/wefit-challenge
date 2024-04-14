export const meta: Metadata = {
  title: "WeFit | carrinho",
  description: "Filmes para toda a família",
};

import { CartTemplate } from "@/templates/Cart";
import { Metadata } from "next";

export default function Carrinho() {
  return <CartTemplate />;
}
