import styled, { css } from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const InputPokemon = styled.input`
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
  min-height: 62px;
  &:focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    border: 0;
    box-shadow: 2px 2px 10px 2px rgb(245, 83, 81, 0.9);
    border-radius: 12px;
    height: 32px;
    width: 32px;
    display: flex;
    align-content: center;
    right: 10px;
    bottom: 10px;
    justify-content: center;
    background-image: url('/assets/images/pokeball.png');
    background-color: ${theme.colors.tartOrange};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
  `}
`;
