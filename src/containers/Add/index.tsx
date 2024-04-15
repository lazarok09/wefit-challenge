import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
const PLUS_ICON = "/icons/plus.svg";
const HYPHEN_ICON = "/icons/hyphen.svg";
import * as Styled from "./styles";

type AddContainerProps = {
  quantity: number;
  handleAdd: () => void;
  handleDecrease: () => void;
};
export const AddContainer = ({
  quantity,
  handleAdd,
  handleDecrease,
}: AddContainerProps) => {
  return (
    <Styled.AddContainer>
      <CustomButton onClick={handleDecrease}>
        <Image alt="símbolo menos" src={HYPHEN_ICON} height={16} width={18} />
      </CustomButton>
      <span>{quantity}</span>
      <CustomButton onClick={handleAdd}>
        <Image alt="símbolo mais" src={PLUS_ICON} height={16} width={18} />
      </CustomButton>
    </Styled.AddContainer>
  );
};
