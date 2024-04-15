import Image from "next/image";
import * as Styled from "./styles";
import Link from "next/link";
import { HeaderProductQuantity } from "./product-quantity";

const SHOP_ICON = "/icons/shop.svg";

export const HeaderComponent = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Link href={"/"}>
          <Styled.HeaderTitle>WeMovies</Styled.HeaderTitle>
        </Link>

        <Styled.HeaderItems>
          <Styled.CartInfoContainer>
            <Styled.CartTitle>Meu carrinho</Styled.CartTitle>

            <HeaderProductQuantity />
          </Styled.CartInfoContainer>
          <Link href="/carrinho">
            <Image src={SHOP_ICON} height={40} width={40} alt="icone de shop" />
          </Link>
        </Styled.HeaderItems>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
