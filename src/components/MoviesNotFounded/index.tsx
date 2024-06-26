import Image from "next/image";
import * as Styled from "./styles";
import { CustomButton } from "../CustomButton";

const ERROR_LADY = "/icons/error-lady.svg";
type Props = {
  label: string;
  onLabelClick: () => void;
};
export const MoviesNotFounded = ({ label, onLabelClick }: Props) => {
  return (
    <Styled.Wrapper>
      Parece que não há nada por aqui {":("}
      <Image
        height={264}
        width={178.63}
        src={ERROR_LADY}
        alt="erro: não encontrado"
      />
      <CustomButton onClick={onLabelClick}>{label}</CustomButton>
    </Styled.Wrapper>
  );
};
