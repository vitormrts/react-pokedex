import styled, { css } from 'styled-components';

export const Header = styled.header`
  padding: 24px 0;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 400px;
    width: 100%;
    height: auto;
    object-fit: contain;
    @media (max-width: ${theme.breakpoints.lg}px) {
      max-width: 300px;
    }
  `}
`;
