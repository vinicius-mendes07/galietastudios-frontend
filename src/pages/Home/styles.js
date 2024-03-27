import styled from 'styled-components';
import manHome from '../../assets/images/man-home.jpeg';

export const Container = styled.main``;

export const FirstSection = styled.section`
  min-height: 85vh;
  background-image: url(${manHome});
  background-position: 50% 13%;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding-top: 200px;
  padding-bottom: 20px;

  div {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 26px;
      margin-bottom: 32px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white.light};
    }

    h1 {
      font-size: 64px;
      margin-bottom: 40px;
      font-weight: 600;
      line-height: 1.1;
      color: ${({ theme }) => theme.colors.white.light};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 70vh;
    background-image: linear-gradient(360deg, rgba(0, 0, 0, .84), rgba(255, 255, 255, 0) 74%), url(${manHome});
    background-position: 0 0, 50% 10%;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    padding: 250px 20px 50px 20px;

    div {
      h1 {
        font-size: 32px;
        margin-bottom: 40px;
      }
    }
  }
`;

export const SecondSection = styled.section`
  padding: 72px 20px;

  p {
    font-weight: 600;
    font-size: 24px;
    font-size: 4.15vh;
    max-width: 915px;
    text-align: center;
    margin: 0 auto;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.dark.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 20px;

    p {
      font-size: 18px;
    }
  }
`;

export const ThirdSection = styled.section`
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

export const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    display: block;
    color: #000;
    background-color: #fff;
    padding: 13px 16px;
    border-radius: 99px;
    font-size: .9375rem;
    font-weight: 500;
    border: 1px solid #fff;

    &:hover {
      opacity: 0.9;
    }
  }
`;
