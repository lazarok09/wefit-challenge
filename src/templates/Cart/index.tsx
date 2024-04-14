import * as Styled from "./styles";
import { Loading } from "@/components/Loading";
import { HeaderComponent } from "@/components/Header";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { CartContainer } from "@/containers/Cart";

export const CartTemplate = () => {
  return (
    <Styled.Wrapper>
      <HeaderComponent />
      <Styled.Content>
        <CartContainer />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
