"use client";

import Image from "next/image";
import * as Styled from "./styles";
import { AddContainer } from "@/containers/Add";
import { CustomButton } from "../CustomButton";
const TRASH_ICON = "/icons/trash.svg";
const DVD_ICON = "/icons/dvd.svg";

type Props = {
  title: string;
  price: number;
  subTotal: number;
  productQuantity: number;
};
function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price);
}

export const ProductCartCard = (props: Props) => {
  const { title, price, subTotal, productQuantity } = props;

  const formattedPrice = formatPrice(price);
  const subTotalFormatted = formatPrice(subTotal);

  const handleAdd = () => {};
  const handleDecrease = () => {};

  return (
    <Styled.Wrapper>
      <Styled.HeadContainer>
        <Styled.ImageContainer>
          <Image
            src={DVD_ICON}
            alt="Homem aranha"
            layout="fill"
            className="custom-image"
            fill
          />
        </Styled.ImageContainer>

        <Styled.BodyContainer>
          <Styled.Info>
            <Styled.Title>{title}</Styled.Title>
            <Styled.PriceContainer>
              <Styled.Price>{formattedPrice}</Styled.Price>
              <Image
                alt="icone de deletar"
                src={TRASH_ICON}
                height={16}
                width={18}
              />
            </Styled.PriceContainer>
          </Styled.Info>

          <Styled.AcionsContainer>
            <AddContainer
              handleAdd={handleAdd}
              handleDecrease={handleDecrease}
              quantity={productQuantity}
            />
            <Styled.SubTotalContainer>
              <Styled.SubTotalLabel>Subtotal</Styled.SubTotalLabel>
              <Styled.SubTotal>{subTotalFormatted}</Styled.SubTotal>
            </Styled.SubTotalContainer>
          </Styled.AcionsContainer>
        </Styled.BodyContainer>
      </Styled.HeadContainer>

      <Styled.Separator />
      <Styled.FooterContainer>
        <Styled.TotalContainer>
          <Styled.TotalLabel>Total</Styled.TotalLabel>
          <Styled.Total>{subTotalFormatted}</Styled.Total>
        </Styled.TotalContainer>
        <CustomButton>Finalizar pedido</CustomButton>
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};
