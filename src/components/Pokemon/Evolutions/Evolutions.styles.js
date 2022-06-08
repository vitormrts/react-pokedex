import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 32px;
    height: 100%;
    @media (max-width: ${theme.breakpoints.lg}px) {
      margin-top: 0;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.oxfordBlue};
    font-size: 23px;
    margin-bottom: 16px;
  `}
`;

export const Evolutions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

export const Evolution = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
  }
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  `}
`;

export const MinLevel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.slateGray};
    font-size: 14px;
    font-weight: 300;
    width: 100%;
    text-align: center;
  `}
`;
