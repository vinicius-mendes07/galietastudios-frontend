import styled from 'styled-components';

import fade from '../../../../assets/images/fade.png';
import corteSocial from '../../../../assets/images/corte-social.jpg';
import cabeloBarba from '../../../../assets/images/cabelo-barba.jpg';
import defaultImage from '../../../../assets/images/default-image.avif';
import somenteMaquina from '../../../../assets/images/somente-maquina.jpg';
import corteTesoura from '../../../../assets/images/corte-tesoura.jpg';
import barba from '../../../../assets/images/barba6.jpg';

export const Container = styled.section`
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
      width: calc(480px * 7 + 30px * 5);
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
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${somenteMaquina});
      }
      .slide4 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${corteTesoura});
      }
      .slide5 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${cabeloBarba});
      }
      .slide6 {
        background-image: linear-gradient(339deg, rgba(0, 0, 0, 0) 62%, rgba(0, 0, 0, .88)), url(${barba});
      }
      .slide7 {
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
        width: calc(330px * 7 + 30px * 5);
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
