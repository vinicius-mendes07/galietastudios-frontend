import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark.dark};
  color: #fff;
  padding: 30px;
  h1 {
    margin: 40px 0;
    text-transform: uppercase;
    text-align: center;
  }
`;
