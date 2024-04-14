import Image from "next/image";
import { CustomButton } from "../CustomButton";
import * as Styled from "./styles";
const CartIcon = "/icons/cart.svg";
type Props = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  price: number;
  quantityAtCart: number;
};
export const MovieCard = (props: Props) => {
  const { image, price, quantityAtCart, title } = props;
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price);

  return (
    <Styled.Wrapper>
      <Image height={147} width={188} src={image.src} alt={image.alt} />
      <h3>{title}</h3>
      <p>{formatedPrice}</p>

      <CustomButton>
        <span>
          <Image height={15} width={15} src={CartIcon} alt="carrinho" />
          {quantityAtCart}
        </span>
        Adicionar ao carrinho
      </CustomButton>
    </Styled.Wrapper>
  );
};
