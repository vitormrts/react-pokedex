import styled, { css } from 'styled-components';

export const SearchBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: ${theme.breakpoints.lg}px) {
      flex-direction: column;
      gap: 12px;
    }
  `}
`;
