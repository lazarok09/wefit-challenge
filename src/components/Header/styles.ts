"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;

  color: white;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.nav`
  display: flex;

  width: 100%;
  padding: 24px 16px;
  max-width: 1440px;
  margin: 0 auto;
  color: white;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  ${() => css`
    width: 100%;
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 27.24px;
    font-weight: 700;
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
  `}
`;

export const CartInfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-content: center;
  `}
`;
export const CartTitle = styled.p`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.desktop} {
      display: flex;

      font-weight: 600;
      line-height: 19.07px;
      font-size: 0.8rem;
      color: ${theme.colors.white};
    }
  `}
`;

export const CartInfo = styled.span`
  ${({ theme }) => css`
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 16.34px;
    color: ${theme.colors.lightGray};
    display: flex;
    align-self: flex-end;
  `}
`;
