import * as Styled from "./styles";
import { HeaderComponent } from "@/components/Header";
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
