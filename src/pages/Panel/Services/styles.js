import styled from 'styled-components';

export const Container = styled.div`
  .page-body {
    max-width: 500px;
    width: 100%;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .actions {
    button {
      background-color: transparent;
      border: none;
    }
  }
`;
