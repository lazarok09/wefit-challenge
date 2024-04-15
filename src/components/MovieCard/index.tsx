"use client";
import Image from "next/image";
import { CustomButton } from "../CustomButton";
import * as Styled from "./styles";

const CartIcon = "/icons/cart.svg";
type Props = {
  quantityAtCart: number;
  id: number;
  handleAddToTheCart: (movie: Movie) => void;
  isActionButtonGreen: boolean;
} & Movie;

export const MovieCard = (props: Props) => {
  const {
    image,
    price,
    id,
    quantityAtCart,
    title,
    handleAddToTheCart,
    isActionButtonGreen,
  } = props;
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price);

  return (
    <Styled.Wrapper isActionButtonGreen={isActionButtonGreen}>
      <Image
        height={188}
        width={147}
        src={image}
        alt={`${title} - Assista ${title} em BlueRay`}
      />
      <h3>{title}</h3>
      <p>{formatedPrice}</p>

      <CustomButton
        onClick={() =>
          handleAddToTheCart({
            id,
            image,
            price,
            title,
          })
        }
      >
        <span>
          <Image height={15} width={15} src={CartIcon} alt="carrinho" />
          {quantityAtCart}
        </span>
        Adicionar ao carrinho
      </CustomButton>
    </Styled.Wrapper>
  );
};
