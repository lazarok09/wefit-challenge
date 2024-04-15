"use client";

import styled, { css } from "styled-components";
import { CustomButton } from "../CustomButton/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBackground};
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    gap: 21px;
    width: 100%;
    @media ${theme.media.desktop} {
      gap: 24px;
      padding: 24px;
    }
  `}
`;
export const HeadContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
  `}
`;
export const AddForDesktop = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.desktop} {
      display: flex;
    }
  `}
`;

export const BodyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 22px;
    flex-direction: column;
    width: 100%;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    @media ${theme.media.desktop} {
      display: grid;
      grid-template-columns: 174px 3.292fr 372px;
    }
    width: 100%;
  `}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    object-fit: cover;

    width: 64px;
    height: 82px;

    .custom-image {
      width: 100%;
      height: 100%;
      min-width: 64px;
    }
  `}
`;

export const TitleForMobile = styled.h3`
  ${({ theme }) => css`
    font-size: 0.9rem;
    line-height: 19.07px;
    font-weight: 700;
    color: ${theme.colors.darkText};

    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;
export const TitleForDesktop = styled.h3`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.desktop} {
      display: flex;

      font-size: 0.9rem;
      line-height: 19.07px;
      font-weight: 700;
      color: ${theme.colors.darkText};
    }
  `}
`;
export const TitleContainerForDesktop = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.desktop} {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `}
`;
export const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media ${theme.media.desktop} {
      justify-content: space-between;
    }
    & > img {
      cursor: pointer;
    }
  `}
`;
export const HeaderAreasForDesktop = styled.p`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.desktop} {
      display: grid;
      grid-template-columns: 2.2fr 3.292fr 372px;
      color: ${theme.colors.lightGray};
      font-weight: 700;
      font-size: 14px;
      line-height: 19.07px;
    }
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkText};
    font-weight: 700;
  `}
`;
export const AcionsContainerForMobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 16px;
    @media ${theme.media.desktop} {
      display: none;
    }
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

export const SubTotalLabel = styled.span`
  ${({ theme }) => css`
    line-height: 16.34px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: ${theme.colors.lightGray};
  `}
`;
export const FooterContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    flex-direction: column;
    ${CustomButton} {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem;
      padding: 11px 0px;
    }
    @media ${theme.media.desktop} {
      flex-direction: row-reverse;

      justify-content: space-between;
      align-items: center;
      justify-items: center;

      ${CustomButton} {
        max-width: 173px;
      }
    }
  `}
`;
export const TotalLabel = styled.span`
  ${({ theme }) => css`
    line-height: 19.07px;

    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: ${theme.colors.lightGray};
  `}
`;

export const TotalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.desktop} {
      gap: 14px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      ${Total} {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `}
`;

export const Total = styled.p`
  ${({ theme }) => css`
    line-height: 32.68px;
    font-size: 1.8rem;
    font-weight: 700;
  `}
`;
