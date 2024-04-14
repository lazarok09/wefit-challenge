"use client";
import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: red;
    width: 100%;
    padding: 16px;
    max-width: 338.67px;
    height: 324px;
    background: ${theme.colors.lightBackground};
    
    ${CustomButton} {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 16.34px;
      font-size: 12px;

      > span {
        height: 100%;
        display: flex;
        gap: 3.4px;
      }
    }
  `}
`;
