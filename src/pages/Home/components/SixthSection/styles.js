import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.dark.darker};
  padding: 5%;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.dark.lighter};
    text-align: center;
  }

  > p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark.lighter};
    margin-top: 16px;
    text-align: center;
  }

  .cards-container {
    display: flex;
    margin: 0 auto;
    margin-top: 64px;
    gap: 30px;
    max-width: 1352px;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${({ theme }) => theme.colors.white.lighter};
      background-color: ${({ theme }) => theme.colors.dark.main};
      padding: 40px 24px;
      gap: 16px;
      border-radius: 12px;
      width: calc(100% / 3);

      > svg {
        margin-bottom: 16px;
      }

      h4 {
        font-size: 24px;
      }

      p {
        font-size: 18px;
        text-align: center;
      }

      .wpp-link {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: ${({ theme }) => theme.colors.white.lighter};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: 44px;
    }

    .cards-container {
      flex-direction: column;
      align-items: center;

      .card {
        width: 100%;
        max-width: 400px;

        h4 {
          font-size: 24px;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 64px 20px;

    h1 {
      font-size: 34px;
    }

    .cards-container {
      .card {
        h4 {
          font-size: 22px;
        }
      }
    }
  }
`;
