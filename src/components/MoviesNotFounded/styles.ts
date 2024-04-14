"use client";

import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBackground};
    padding: 64px;
    border-radius: 4px;
    
    ${CustomButton} {
      line-height: 16.34px;
      font-weight: 700;
      border-radius: 4px;
    }
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `}
`;
export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 27.24px;
    text-align: center;
  `}
`;
