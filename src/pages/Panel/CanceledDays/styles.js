import styled from 'styled-components';

export const Container = styled.div`

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
  max-width: 500px;

  & + & {
    margin-top: 16px;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
