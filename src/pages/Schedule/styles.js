import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white.main};

  h1 {
    margin: 40px 0;
    text-transform: uppercase;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;
