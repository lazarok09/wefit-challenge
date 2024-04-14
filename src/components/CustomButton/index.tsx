import { ButtonHTMLAttributes } from "react";

import * as Styled from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export const CustomButton = (props: Props) => {
  return <Styled.CustomButton {...props}>{props.children}</Styled.CustomButton>;
};
