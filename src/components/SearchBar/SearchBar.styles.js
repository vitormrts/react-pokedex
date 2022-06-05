import styled, { css } from 'styled-components';

export const SearchBar = styled.div`
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const InputPokemon = styled.input`
  ${({ theme }) => css`
    border: 0;
    box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
    padding: 16px 24px;
    border-radius: 16px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    width: 100%;
    &:focus {
      outline: 0;
    }
  `}
`;

export const SelectType = styled.select``;

export const Option = styled.option``;
