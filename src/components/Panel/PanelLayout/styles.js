import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  min-height: 100vh;

  .content {
    height: 100%;
    max-width: calc(100vw - 220px);
    margin-left: 220px;
    padding: 40px;
  }
`;
