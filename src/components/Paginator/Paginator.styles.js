import styled, { css } from 'styled-components';

export const Paginator = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
    color: ${theme.colors.slateGray};
    font-size: 14px;
    font-weight: 500;
    gap: 8px;
    @media (max-width: ${theme.breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    color: ${theme.colors.slateGray};
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    padding: 12px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${theme.colors.oxfordBlue};
    }
    &:disabled {
      visibility: hidden;
      opacity: 0;
    }
  `}
`;

export const Pages = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 12px;
    list-style: none;
    margin: 0 20px;
    padding: 0;
    @media (max-width: ${theme.breakpoints.md}px) {
      gap: 2px;
    }
  `}
`;

export const Page = styled.li`
  ${({ theme, selected }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: ${selected ? theme.colors.tartOrange : theme.colors.slateGray};
    font-size: 14px;
    font-weight: 500;
    padding: 12px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${theme.colors.oxfordBlue};
    }
  `}
`;
