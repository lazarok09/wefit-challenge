import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    @media ${theme.media.desktop} {
      display: flex;
      gap: 16px;
    }
  `}
`;
