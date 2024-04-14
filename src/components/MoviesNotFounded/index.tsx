import Image from "next/image";
import * as Styled from "./styles";
import { CustomButton } from "../CustomButton";

const ERROR_LADY = "/icons/error-lady.svg";

export const MoviesNotFounded = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Title>Parece que não há nada por aqui {":("}</Styled.Title>
        <Image
          height={264}
          width={178.63}
          src={ERROR_LADY}
          alt="erro, filme não encontrado"
        />
        <CustomButton>Recarregar página</CustomButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
