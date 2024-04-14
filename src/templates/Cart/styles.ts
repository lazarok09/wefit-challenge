"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.darkBackground};
    min-height: 100vh;
  `}
`;
export const Content = styled.section`
  ${() => css`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  `}
`;
