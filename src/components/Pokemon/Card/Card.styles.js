import styled, { css } from 'styled-components';

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  top: -40px;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    max-width: 280px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 56px 0 28px;
    position: relative;
    border-radius: 24px;
    box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover {
      ${Image} {
        animation: shake 0.6s;
        animation-iteration-count: 0.5;
      }
    }
    @media (max-width: ${theme.breakpoints.sm}px) {
      max-width: 100%;
    }
  `}

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
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
    margin-bottom: 8px;
    font-size: 20px;
    text-align: center;
  `}
`;
