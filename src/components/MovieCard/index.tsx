"use client";
import Image from "next/image";
import { CustomButton } from "../CustomButton";
import * as Styled from "./styles";
import { useAppDispatch } from "@/app/lib/hooks";
import { addToCart } from "@/app/lib/features/counter/productsSlice";
const CartIcon = "/icons/cart.svg";
type Props = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  price: number;
  quantityAtCart: number;
  id: number;
};
export const MovieCard = (props: Props) => {
  const { image, price, id, quantityAtCart, title } = props;
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price);
  const dispatch = useAppDispatch();

  return (
    <Styled.Wrapper>
      <Image height={147} width={188} src={image.src} alt={image.alt} />
      <h3>{title}</h3>
      <p>{formatedPrice}</p>

      <CustomButton
        onClick={() =>
          dispatch(
            addToCart({
              id,
              title,
              image: image.src,
              price,
            })
          )
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
