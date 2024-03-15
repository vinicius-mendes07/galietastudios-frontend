import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const containerVariantes = {
  default: css`
    background-color: ${({ theme }) => theme.colors.dark.light};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
};

export const Container = styled.div`
  color: #fff;
  padding: 16px 32px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${messageIn} 0.3s;

  ${({ $isLeaving }) => $isLeaving && css`animation: ${messageOut} 0.2s forwards;`}

  ${({ $type }) => containerVariantes[$type] || containerVariantes.default}

  & + & {
    margin-top: 16px;
  }

  strong {
    margin-left: 8px
  }
`;
