import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  min-height: 100vh;

  .content {
    height: 100%;
    max-width: calc(100vw - 220px);
    width: 100%;
    margin-left: 220px;
    padding: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .content {
      padding: 40px 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .content {
      max-width: 100%;
      margin-left: 0;
    }
  }
`;
