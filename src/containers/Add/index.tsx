
import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
const PLUS_ICON = "/public/plus.svg";
const HYPHEN_ICON = "/public/hyphen.svg";

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
    <div>
      <CustomButton onClick={handleDecrease}>
        <Image alt="menos" src={HYPHEN_ICON} height={16} width={18} />
      </CustomButton>
      <span>{quantity}</span>
      <CustomButton onClick={handleAdd}>
        <Image alt="menos" src={PLUS_ICON} height={16} width={18} />
      </CustomButton>
    </div>
  );
};
