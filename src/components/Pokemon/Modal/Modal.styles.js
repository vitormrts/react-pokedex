import styled, { css } from 'styled-components';

export const Image = styled.img`
  width: 240px;
  height: 240px;
  object-fit: contain;
`;

export const Overlay = styled.div`
  ${({ theme, isOpen }) => css`
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 100;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    max-width: 280px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 32px;
    position: relative;
    border-radius: 24px;
    box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
    min-width: 400px;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    right: 32px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 32px;
      background-color: ${theme.colors.slateGray};
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  `}
`;

export const Id = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.slateGray};
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
  `}
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.oxfordBlue};
    font-size: 23px;
  `}
`;

export const Genera = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.slateGray};
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 500;
  `}
`;

export const PokedexEntry = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.oxfordBlue};
    letter-spacing: 2px;
    font-size: 15px;
    text-transform: uppercase;
    margin: 16px 0;
    font-weight: 700;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 14px;
    text-align: center;
    line-height: 21px;
  `}
`;
