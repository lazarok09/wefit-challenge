import Image from "next/image";
import * as Styled from "./styles";
import { CustomButton } from "../CustomButton";

type Props = {
  label: string;
  onLabelClick: () => void;
};
const MALE_ICON = "/icons/cool-boy.svg";
export const SuccessPurchase = ({ label, onLabelClick }: Props) => {
  return (
    <Styled.Wrapper>
      <h2>Compra realizada com sucesso!</h2>
      <Image
        src={MALE_ICON}
        alt={"homem com indicador positivo | sucesso"}
        height={238}
        width={247.72}
      />
      <CustomButton onClick={onLabelClick}>{label}</CustomButton>
    </Styled.Wrapper>
  );
};
