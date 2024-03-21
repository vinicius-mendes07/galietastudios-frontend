import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  padding: 20px;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
  ${({ $isLeaving }) => $isLeaving && css`animation: ${fadeOut} 0.2s forwards;`}
`;

export const Container = styled.div`
  background-color: #fff;
  max-width: 450px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 24px;
  animation: ${scaleIn} 0.3s;
  ${({ $isLeaving }) => $isLeaving && css`animation: ${scaleOut} 0.2s forwards;`}


  > h1 {
    font-size: 22px;
    color: ${({ theme, $danger }) => ($danger ? theme.colors.danger.main : theme.colors.gray[900])};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .cancel-button {
    margin-right: 24px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
