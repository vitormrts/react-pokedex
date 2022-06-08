import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1140px;
    flex-direction: column;
    padding: 0 16px;
    @media (max-width: ${theme.breakpoints.xl}px) {
      max-width: 940px;
    }
    @media (max-width: ${theme.breakpoints.lg}px) {
      max-width: 540px;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 80px;
    justify-items: center;
    padding: 80px 0px 40px;
    @media (max-width: ${theme.breakpoints.lg}px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 50px 0px 30px;
    }
    @media (max-width: ${theme.breakpoints.sm}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;
