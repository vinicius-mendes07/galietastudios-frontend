import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-size: 16px;
  height: 52px;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark.darker};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.dark.dark};
  }

  &[disabled] {
    background-color: #ccc !important;
    cursor: default !important;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
