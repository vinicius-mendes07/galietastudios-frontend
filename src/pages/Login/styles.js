import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  height: 100%;
  min-height: calc(100vh - 64px);
  padding: 24px;

  h1 {
    margin-bottom: 32px;
    margin-top: 64px;
    text-align: center;
  }

  form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 24px;
    }
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: calc(100vh - 57px);
  }
`;
