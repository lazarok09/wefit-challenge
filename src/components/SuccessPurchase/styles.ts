import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 4px;
    padding: 64px 45px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: ${theme.colors.darkText};
    text-align: center;
    align-items: center;

    background: ${theme.colors.lightBackground};
    ${CustomButton} {
      text-transform: uppercase;
      padding: 11px 8px;
      font-size: 0.8rem;
      line-height: 16.34px;
      font-weight: 700;
      border-radius: 8px;
      max-width: 173px;
    }
  `}
`;
