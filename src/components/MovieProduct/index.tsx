import Image from "next/image";
import * as Styled from "./styles";
import { AddContainer } from "@/containers/Add";
import { CustomButton } from "../CustomButton";
import { formatPriceToBRL } from "@/helpers/format";
const TRASH_ICON = "/icons/trash.svg";

type Props = {
  subTotal: number;
  productQuantity: number;
  handlePurchase: () => void;
  handleAddProduct: () => void;
  handleRemoveProcuct: () => void;
} & Movie;

export const MovieProduct = (props: Props) => {
  const {
    title,
    price,
    subTotal,
    productQuantity,
    image,
    handleAddProduct,
    handleRemoveProcuct,
    handlePurchase,
  } = props;

  const formattedPrice = formatPriceToBRL(price);
  const subTotalFormatted = formatPriceToBRL(subTotal);

  return (
    <Styled.Wrapper>
      <Styled.HeadContainer>
        <Styled.ImageContainer>
          <Image
            src={image}
            alt="Homem aranha"
            layout="fill"
            className="custom-image"
            fill
            priority={true}
            
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
              handleAdd={handleAddProduct}
              handleDecrease={handleRemoveProcuct}
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
        <CustomButton onClick={handlePurchase}>Finalizar pedido</CustomButton>
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};
