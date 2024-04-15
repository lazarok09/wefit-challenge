"use client";
import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;

    gap: 12px;
    padding: 11px 8px;
    display: flex;
    border-radius: 4px;

    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    background: ${theme.colors.lightBlue};
  `}
`;
