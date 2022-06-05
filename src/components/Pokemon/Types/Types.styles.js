import styled, { css } from 'styled-components';

export const Type = styled.div`
  ${({ color }) => css`
    padding: 4px 12px;
    background-color: ${color};
    border-radius: 4px;
  `}
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.oxfordBlue};
  opacity: 0.9;
  font-size: 14px;
  text-align: center;
`;

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
