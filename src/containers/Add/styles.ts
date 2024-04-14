"use client";

import { CustomButton } from "@/components/CustomButton/styles";
import styled, { css } from "styled-components";

export const AddContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: center;

    & > span {
      border: 1px solid ${theme.colors.borderLightGray};
      border-radius: 4px;
      padding: 0px 22px;
      color: ${theme.colors.darkText};
    }

    ${CustomButton} {
      background: transparent;
      border: none;
      margin: none;
      padding: none;
    }
  `}
`;
