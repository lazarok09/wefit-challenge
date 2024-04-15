"use client";
import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";
type Props = {
  isActionButtonGreen: boolean;
};
export const Wrapper = styled.article<Props>`
  ${({ theme, isActionButtonGreen }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    color: red;
    width: 100%;
    padding: 16px;
    max-width: 338.67px;
    height: auto;
    max-height: 324px;
    border-radius: 4px;
    
    background: ${theme.colors.lightBackground};

    ${CustomButton} {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 16.34px;
      font-size: 0.8rem;
      background: ${isActionButtonGreen
        ? theme.colors.greenBackground
        : theme.colors.lightBlue};

      > span {
        height: 100%;
        display: flex;
        gap: 3.4px;
      }
    }
    > p {
      font-weight: 700;
      font-size: 1rem;
      line-height: 21.79px;
      text-align: center;
      color: ${theme.colors.darkText};
    }
    > h3 {
      color: ${theme.colors.darkText};
      font-size: 0.8rem;
      line-height: 16.34px;
    }
  `}
`;
