import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
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
  gap: 16px;
  width: 100%;
`;

export const Evolution = styled.li`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 16px;
    font-weight: 500;
    min-width: 200px;
  `}
`;

export const MinLevel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.slateGray};
    font-size: 14px;
    font-weight: 300;
    width: 100%;
  `}
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
