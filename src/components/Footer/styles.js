import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.white.lighter};

  .footer-body {
    max-width: 1440px;
    margin: 0 auto;
    padding: 5% 64px;

    .text-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 16px;

      .logo-wrapper {
        max-width: 416px;

        a {
          img {
            width: 132px;
            margin-bottom: 32px;
          }
        }

        p {
          font-size: 14px;
        }
      }

      .info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
        font-size: 14px;
        p {
          font-weight: 600;
          margin-bottom: 8px;
        }
        span {
          margin-bottom: 10px;
        }
      }
    }

    ul {
      margin-top: 16px;
      list-style: none;
      display: flex;
      gap: 40px;
      li {
        a {
          color: #000;
          text-decoration: none;
          padding: 16px 4px;
          font-weight: 500;
          display: block;
          border-radius: 8px;
          transition: .15s;

          &:hover {
            background-color: #fff;
          }
        }
      }
    }
  }

  .footer {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 64px;

    span {
      font-size: 14px;
      color: #000;
      display: block;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 8px;

      li {
        a {
          color: #000;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          padding: 5px 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: .15s;

          &:hover {
            background-color: #fff;
          }

          svg{
            width: 16px;
            height: 20px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .footer-body {
      padding: 5% 32px;

      .text-wrapper {
        justify-content: center;
        flex-direction: column;

        .logo-wrapper {
          p {
            margin-bottom: 10px;
          }
        }
      }

      ul {
        flex-wrap: wrap;
        font-size: 15px;
      }
    }

    .footer {
      padding: 16px 32px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .footer-body {
      padding: 24px 20px;

      ul {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
    }

    .footer {
      padding: 16px 20px;
    }
  }
`;
