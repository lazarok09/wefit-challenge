import Image from "next/image";
import * as Styled from "./styles";
import Link from "next/link";

const SHOP_ICON = "/icons/shop.svg";

export const HeaderComponent = () => {
  return (
    <Styled.HeaderWrapper>
      <h2>WeMovies</h2>

      <Styled.HeaderItems>
        <p>0 itens</p>
        <Link href="/carrinho">
          <Image src={SHOP_ICON} height={40} width={40} alt="icone de shop" />
        </Link>
      </Styled.HeaderItems>
    </Styled.HeaderWrapper>
  );
};
