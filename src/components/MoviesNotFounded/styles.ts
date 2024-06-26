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
    width: 100%;
    
    ${CustomButton} {
      line-height: 16.34px;
      font-weight: 700;
      max-width: 173px;
    }

    @media ${theme.media.desktop} {
      max-width: unset;
    }
  `}
`;
