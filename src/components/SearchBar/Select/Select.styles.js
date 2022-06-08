import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div`
  ${({ theme }) => css`
    min-width: 200px;
    position: relative;
    @media (max-width: ${theme.breakpoints.lg}px) {
      width: 100%;
    }
  `}
`;

export const DropDownHeader = styled.div`
  ${({ theme, isOpen }) => css`
    box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
    padding: 16px 24px;
    min-height: 62px;
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    background-color: ${theme.colors.white};
    border-radius: 16px;
    svg {
      margin-left: auto;
      transform: rotate(${isOpen ? '180deg' : '0deg'});
      transition: transform 0.2s ease-in-out;
    }
  `}
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.slateGray};
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
  `}
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
`;

export const DropDownList = styled.ul`
  ${({ theme }) => css`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    box-sizing: border-box;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: ${theme.colors.white};
    border-radius: 16px;
    margin-top: 8px;
    box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
    list-style: none;
    padding: 16px;
  `}
`;

export const ListItem = styled.li`
  ${({ theme, selected }) => css`
    margin-bottom: 16px;
    font-size: 13px;
    color: ${theme.colors.slateGray};
    cursor: pointer;
    ${selected &&
    css`
      color: ${theme.colors.tartOrange};
    `}
  `}
`;
