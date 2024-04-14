"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.darkBackground};
  `}
`;
