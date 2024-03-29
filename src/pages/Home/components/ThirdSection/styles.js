import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.dark.darker};
  display: flex;
  padding: 120px 72px;
  gap: 92px;
  font-family: Arial, sans-serif;
  position: relative;

  .text-wrapper {
    max-width: 420px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      position: sticky;
      top: 88px;

      h2 {
        font-size: 48px;
        color: ${({ theme }) => theme.colors.dark.lighter};
        line-height: 130%;
      }

      p {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.dark.lighter};
        line-height: 130%;
      }

      div {
        margin-top: 16px;
      }
    }
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 54px;

    .card {
      color: ${({ theme }) => theme.colors.white.lighter};
      background-color: ${({ theme }) => theme.colors.dark.main};
      border-radius: 12px;
      padding: 70px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      svg {
        margin-bottom: 16px;
      }

      h3 {
        font-size: 35px;
        font-weight: 700;
      }

      p {
        font-size: 22px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 92px 40px;
    gap: 80px;

    .text-wrapper {
      .text {
        align-items: center;
        text-align: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 88px 20px;
    gap: 48px;

    .text-wrapper {
      .text {
        h2 {
          font-size: 34px;
          line-height: 125%;
        }
      }
    }

    .cards-container {
      .card {
        padding: 40px;

        h3 {
          font-size: 22px;
        }

        p {
          font-size: 22px;
          line-height: 30px;
        }
      }
    }
  }
`;
