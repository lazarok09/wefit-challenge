"use client";

import Image from "next/image";
import * as Styled from "./styles";
import { AddContainer } from "@/containers/Add";
import { CustomButton } from "../CustomButton";
const TRASH_ICON = "/public/trash.svg";

type Props = {
  title: string;
  price: number;
  subTotal: number;
  productQuantity: number;
};

export const ProductCartCard = (props: Props) => {
  const { title, price, subTotal, productQuantity } = props;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price);

  const handleAdd = () => {};
  const handleDecrease = () => {};

  return (
    <Styled.Wrapper>
      <Image alt="Homem aranha" src={""} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Price>{formattedPrice}</Styled.Price>

      <Image alt="icone de deletar" src={TRASH_ICON} height={16} width={18} />

      <AddContainer
        handleAdd={handleAdd}
        handleDecrease={handleDecrease}
        quantity={productQuantity}
      />

      <Styled.Total>{subTotal}</Styled.Total>
      <Styled.SubTotal>{subTotal}</Styled.SubTotal>

      <Styled.Separator />

      <Styled.TotalLabel>Total</Styled.TotalLabel>
      <Styled.Total>{subTotal}</Styled.Total>
      <CustomButton>Finalizar pedido</CustomButton>
    </Styled.Wrapper>
  );
};
