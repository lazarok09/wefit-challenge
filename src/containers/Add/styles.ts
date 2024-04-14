"use client";

import { CustomButton } from "@/components/CustomButton/styles";
import styled, { css } from "styled-components";

export const AddContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 11px;
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
      margin: 0;
      padding: 0;
    }
  `}
`;
