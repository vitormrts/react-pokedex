import styled, { css } from 'styled-components';

export const Image = styled.img`
  ${({ theme }) => css`
    width: 240px;
    height: 240px;
    object-fit: contain;
    @media (max-width: ${theme.breakpoints.md}px) {
      width: 160px;
      height: 160px;
    }
  `}
`;

export const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    position: relative;
    border-radius: 24px;
    box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
    max-width: 800px;
    @media (max-width: ${theme.breakpoints.lg}px) {
      max-width: 100%;
      border-radius: 0;
      overflow-y: scroll;
      display: block;
    }
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-right: 32px;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: ${theme.colors.slateGray};
      opacity: 0.4;
      @media (max-width: ${theme.breakpoints.lg}px) {
        display: none;
      }
    }
    @media (max-width: ${theme.breakpoints.lg}px) {
      padding-right: 0;
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
    margin-bottom: 16px;
    @media (max-width: ${theme.breakpoints.lg}px) {
      max-width: 550px;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
      max-width: 290px;
    }
  `}
`;

export const Habitat = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  `}
`;

export const CaptureRate = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  `}
`;

export const GrowthRate = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.mineShaft};
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  `}
`;

export const Details = styled.div`
  ${({ theme }) => css`
    padding-left: 32px;
    @media (max-width: ${theme.breakpoints.lg}px) {
      display: flex;
      padding-left: 0;
      width: 100%;
      justify-content: center;
      margin-top: 16px;
      max-width: 600px;
      margin: 0 auto;
      margin-top: 16px;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
      flex-direction: column;
      gap: 16px;
    }
  `}
`;
