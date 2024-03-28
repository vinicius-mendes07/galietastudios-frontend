import styled, { css } from 'styled-components';

import manHome from '../../assets/images/man-home.jpeg';
import fade from '../../assets/images/fade.png';
import corteSocial from '../../assets/images/corte-social.jpg';
import cabeloBarba from '../../assets/images/cabelo-barba.jpg';
import defaultImage from '../../assets/images/default-image.avif';

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

export const FourthSection = styled.section`
  h1 {
    font-size: 60px;
    margin: 72px 24px;
    text-align: center;
  }

  .slider {
    overflow: hidden;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;

    .slides {
      width: calc(480px * 6 + 30px * 5);
      display: flex;
      gap: 30px;

      .slide {
        padding: 40px 0 40px 48px;
        height: 480px;
        width: 480px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 12px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: grayscale(1);
        transition: .4s;

        &:hover {
          filter: grayscale(0);
        }

        h3 {
          color: #fff;
          font-size: 35px;
        }
      }
      .slide1 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${fade});

        margin-left: ${({ $slideMargin }) => $slideMargin}px;
      }
      .slide2 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${corteSocial});
      }
      .slide3 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${defaultImage});
      }
      .slide4 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${defaultImage});
      }
      .slide5 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${cabeloBarba});
      }
      .slide6 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${defaultImage});
      }
    }
  }

  .buttons {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;

    button {
      margin-top: 40px;
      margin-bottom: 48px;
      background-color: transparent;
      border: none;
      transition: .2s;

      &:hover {
        transform: scale(1.2);
      }

      img {
        height: 45px;
        width: 45px;
      }
    }
    .button-left-mobile, .button-right-mobile {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: 56px;
      margin: 38px 24px;
    }

    .slider {
      .slides {
        .slide {
          h3 {
            font-size: 30px;
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: 36px;
      margin: 40px 24px;
    }

    .slider {
      max-width: 1200px;
      padding: 0px;
      margin: 0px 30px;

      .slides {
        width: calc(330px * 6 + 30px * 5);
        gap: 30px;

        .slide {
          padding: 40px 0 32px 24px;
          height: 330px;
          width: 330px;
          h3 {
            font-size: 30px;
          }
        }
        .slide1 {
          margin-left: ${({ $slideMarginMobile }) => $slideMarginMobile}px;
        }
      }
    }

    .buttons {
      .button-left-mobile, .button-right-mobile {
        display: inline-block;
      }

      .button-left-desktop, .button-right-desktop {
        display: none;
      }
    }
  }

`;

export const FifthSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white.lighter};

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
      width: 605px;
      height: 605px;
      width: 50%;
      height: 100%;
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
        text-align: center;
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
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 60px;

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

export const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    display: block;
    padding: 13px 16px;
    border-radius: 99px;
    font-size: .9375rem;
    font-weight: 500;
    ${({ theme, $backgroundColor }) => (
    $backgroundColor === 'dark'
      ? css`
        background-color: ${theme.colors.dark.darker};
        color: #fff;
        `
      : css`
      background-color: #fff;
      color: #000;
      `
  )}


    &:hover {
      opacity: 0.9;
    }
  }
`;
