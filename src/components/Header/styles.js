import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 3;

  .logo {
    img {
      display: block;
      max-width: 100px;
    }
  }

  .logo-mobile {
    display: none;
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      max-width: 800px;
      margin: 0 auto;

      div {
        display: flex;
        gap: 32px;
      }

    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark.dark};
      font-size: 18px;
      transition: .3s;

      &:hover {
        color: #000;
      }
    }
  }

  .hamburguer {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    nav {
      ul {
        div {
          gap: 24px;
        }
        a {
          font-size: 16px;
        }

      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    .logo-pc {
      display: none;
    }

    .logo-mobile {
      display: block;
      img {

        width: 70px;
      }
    }


    nav {
      position: absolute;
      overflow: hidden;
      top: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      border-top: 1px solid ${({ theme }) => theme.colors.white.main};
      transition: 400ms ease 0s;

      ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 24px;
        height: 100%;
        gap: 24px;
        background-color: #fff;

        div {
          display: flex;
          flex-direction: column;
          gap: 24pxpx;
          li {

            a {
              font-size: 40px;
            }
          }
        }
      }
    }

    .hamburguer {
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;

      .line {
        background-color: ${({ theme }) => theme.colors.dark.dark};
        width: 30px;
        height: 2px;
        transition: .3s ease-in;
        border-radius: 5px;
      }

      .line1 {
        margin-top: 10px;
        margin-bottom: 13px;
      }

      .line3 {
        margin-bottom: 10px;
      }
    }
    .show-menu ~ nav {
      top: 100%;
      height: 100vh;
      z-index: 3;
      overflow: hidden;

      ul {
        height: 100%;
      }
    }
    .show-menu {

      .line1 {
        transform: translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg);
      }

      .line3 {
        transform: translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
      }
    }

  }
`;
