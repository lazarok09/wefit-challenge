import { MovieCard } from "@/components/MovieCard";
import * as Styled from "./styles";
import { Loading } from "@/components/Loading";
import { HeaderComponent } from "@/components/Header";
const MockedImg = "/icons/dvd.svg";
export const HomeTemplate = () => {
  return (
    <Styled.Wrapper>
      <HeaderComponent />

      <MovieCard
        image={{
          alt: "BlackWidow - Viúva Negra em BlueRay",
          src: MockedImg,
        }}
        price={9.99}
        quantityAtCart={0}
        title="Viúva Negra"
      />
      <Loading />
    </Styled.Wrapper>
  );
};
