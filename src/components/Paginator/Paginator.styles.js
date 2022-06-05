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
  `}
`;

export const Button = styled.button``;
