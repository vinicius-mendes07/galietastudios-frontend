import styled, { css } from 'styled-components';

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.dark.dark};
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  height: 52px;
  width: 100%;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  transition: border-color .2s ease-in;
  appearance: none;

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
