"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.darkBackground};
    min-height: 100vh;
  `}
`;
export const Content = styled.section`
  ${({ theme }) => css`
    padding: 16px;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;

    @media ${theme.media.desktop} {
      display: flex;
      column-gap: 16px;
      row-gap: 24px;
      align-items: normal;
    }
  `}
`;
