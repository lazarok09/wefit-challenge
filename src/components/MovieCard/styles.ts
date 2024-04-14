"use client";
import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
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

    background: ${theme.colors.lightBackground};

    ${CustomButton} {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 16.34px;
      font-size: 0.8rem;

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
