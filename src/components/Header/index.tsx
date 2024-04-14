import Image from "next/image";
import * as Styled from "./styles";

const SHOP_ICON = "/icons/shop.svg";

export const HeaderComponent = () => {
  return (
    <Styled.HeaderWrapper>
      <h2>WeMovies</h2>
      
      <Styled.HeaderItems>
        <p>0 itens</p>
        <Image src={SHOP_ICON} height={40} width={40} alt="icone de shop" />
      </Styled.HeaderItems>
    </Styled.HeaderWrapper>
  );
};
