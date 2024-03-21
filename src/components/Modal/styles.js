import styled from 'styled-components';

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
`;

export const Container = styled.div`
  background-color: #fff;
  max-width: 450px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 24px;


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
