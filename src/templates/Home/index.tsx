import * as Styled from "./styles";
import { HeaderComponent } from "@/components/Header";
import { MoviesContainer } from "@/containers/Movies";

export const HomeTemplate = () => {
  return (
    <Styled.Wrapper>
      <HeaderComponent />
      <Styled.Content>
        <MoviesContainer />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
