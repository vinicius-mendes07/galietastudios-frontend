import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white.main};

  h1 {
    margin: 40px 0;
    text-transform: uppercase;
    text-align: center;
  }
`;
