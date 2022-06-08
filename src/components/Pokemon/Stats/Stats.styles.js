import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.oxfordBlue};
    font-size: 23px;
    margin-bottom: 16px;
  `}
`;

export const Stats = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    width: 100%;
    @media (max-width: ${theme.breakpoints.lg}px) {
      align-items: center;
    }
  `}
`;

export const Stat = styled.li`
  display: flex;
  align-items: center;
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 16px;
    font-weight: 500;
    min-width: 200px;
  `}
`;

export const BaseStat = styled.span``;
