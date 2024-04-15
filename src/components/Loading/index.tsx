import Image from "next/image";
const LOADING_ICON = "/icons/loading.svg";
import * as Styled from "./styles";
export const Loading = () => {
  return (
    <Styled.LoadingContainer>
      <Image src={LOADING_ICON} height={55.41} width={55.41} alt="carregando" />
    </Styled.LoadingContainer>
  );
};
