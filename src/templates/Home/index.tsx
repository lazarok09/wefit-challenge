import { MovieCard } from "@/components/MovieCard";
import * as Styled from "./styles";
import { Loading } from "@/components/Loading";
import { HeaderComponent } from "@/components/Header";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { TestRedux } from "./add";
import { MoviesContainer } from "@/containers/Movies";
const MockedImg = "/icons/dvd.svg";

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
