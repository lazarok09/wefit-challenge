import { MovieCard } from "@/components/MovieCard";
import * as Styled from "./styles";
import { Loading } from "@/components/Loading";
import { HeaderComponent } from "@/components/Header";
import { MoviesNotFounded } from "@/components/MoviesNotFounded";
const MockedImg = "/icons/dvd.svg";
export const HomeTemplate = () => {
  return (
    <Styled.Wrapper>
      <HeaderComponent />
      <Styled.Content>
      <MoviesNotFounded />
        <Loading />

        {/* <MovieCard
          image={{
            alt: "BlackWidow - Viúva Negra em BlueRay",
            src: MockedImg,
          }}
          price={9.99}
          quantityAtCart={0}
          title="Viúva Negra"
        />
        <MovieCard
          image={{
            alt: "BlackWidow - Viúva Negra em BlueRay",
            src: MockedImg,
          }}
          price={9.99}
          quantityAtCart={0}
          title="Viúva Negra"
        /> */}
      </Styled.Content>
    </Styled.Wrapper>
  );
};
