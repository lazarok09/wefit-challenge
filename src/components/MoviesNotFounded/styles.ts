"use client";

import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBackground};
    padding: 64px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 27.24px;
    align-items: center;
    text-align: center;
    color: ${theme.colors.darkText};

    ${CustomButton} {
      line-height: 16.34px;
      font-weight: 700;
      border-radius: 4px;
      padding: 11px 8px;
      border-radius: 8px;
      max-width: 173px;
    }
  `}
`;
