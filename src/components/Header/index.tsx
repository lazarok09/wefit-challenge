import Image from "next/image";
import * as Styled from "./styles";
import Link from "next/link";
import { HeaderProductQuantity } from "./Items";

const SHOP_ICON = "/icons/shop.svg";

export const HeaderComponent = () => {
  return (
    <Styled.HeaderWrapper>
      <Link href={"/"}>
        <Styled.HeaderTitle>WeMovies</Styled.HeaderTitle>
      </Link>

      <Styled.HeaderItems>
        <HeaderProductQuantity />
        <Link href="/carrinho">
          <Image src={SHOP_ICON} height={40} width={40} alt="icone de shop" />
        </Link>
      </Styled.HeaderItems>
    </Styled.HeaderWrapper>
  );
};
