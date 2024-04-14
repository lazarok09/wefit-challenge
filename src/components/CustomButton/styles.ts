"use client";
import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    
    gap: 12px;
    padding: 8px;
    display: flex;
    
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    background: ${theme.colors.lightBlue};
  `}
`;
