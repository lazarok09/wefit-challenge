"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBackground};
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    gap: 21px;
  `}
`;
export const HeadContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`;
export const BodyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 22px;
    flex-direction: column;
  `}
`;
export const FooterContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    flex-direction: column;
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    object-fit: contain;

    width: 82px;
    height: 64px;
    img {
      width: 100%;
      height: 100%;
    }
  `}
`;
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 16px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 0.9rem;
    line-height: 19.07px;
    font-weight: 700;
    color: ${theme.colors.darkText};
  `}
`;
export const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkText};
    font-weight: 700;
  `}
`;
export const AcionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 16px;
  `}
`;

export const SubTotalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
`;
export const SubTotal = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkText};
    font-weight: 700;
  `}
`;

export const Separator = styled.hr`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
  `}
`;

export const TotalLabel = styled.span`
  ${({ theme }) => css`
    line-height: 16.34px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: ${theme.colors.lightGray};
  `}
`;

export const TotalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const Total = styled.p`
  ${({ theme }) => css`
    line-height: 32.68px;
    font-size: 1.8rem;
    font-weight: 700;
  `}
`;
