import styled, { css } from 'styled-components';

export const Select = styled.select`
  background-color: #fff;
  border: 2px solid #fff;
  width: 200px;
  outline: none;
  height: 52px;
  width: 100%;
  color: ${({ theme }) => theme.colors.dark.dark};
  padding: 0 16px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  transition: border-color .2s ease-in;
  /* appearance: none; */

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}

  &:focus {
    border-color: ${({ theme }) => theme.colors.dark.lighter};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]}
  }
`;
