"use client";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 24px 16px;
  color: white;
  justify-content: space-between;
  align-items: center;
`;


export const HeaderTitle = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    width: 100%;

    > h2 {
      font-size: 1.6rem;
      line-height: 27.24px;
      font-weight: 700;
    }
  `}
`;

export const ShopIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    gap: 16px;
    width: 100%;

    p {
      color: ${theme.colors.lightGray};
      font-size: 0.8rem;
      line-height: 16.34px;
      font-weight: 600;
    }
  `}
`;

export const HeaderItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
    padding: 9.71px;
    & > p {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 16.34px;
      color: ${theme.colors.lightGray};
    }
  `}
`;
