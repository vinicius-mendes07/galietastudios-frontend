import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.white.lighter};
  padding-bottom: 64px;

  h1 {
    font-size: 60px;
    padding: 5%;
    color: ${({ theme }) => theme.colors.dark.light};
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 56px;

    img {
      height: 100%;
      width: 45%;
      border-radius: 0 24px 24px 0;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;

      span {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.dark.light};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 60px;

    h1 {
      font-size: 56px;
      padding: 5% 16px;
    }

    .content {
      flex-direction: column;
      padding: 0 16px;

      img {
        width: 100%;
        height: 100%;
      }

      .text {
        align-items: center;

        span {
          font-size: 22px;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: 36px;
      padding: 64px 16px;
    }

    .content {
      flex-direction: column;
      padding: 0 0 0 0;

      img {
        margin-right: 32px;
      }

      .text {
        align-items: center;

        span {
          font-size: 20px;
        }
      }
    }
  }
`;
