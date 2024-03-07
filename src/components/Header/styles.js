import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px;
  .logo {
    img {
      display: block;
      max-width: 100px;
    }
  }

  .logo-pc {
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

  /*
    .close-hamburguer {
      display: none;
    }
  .hamburguer {
    display: none;
  } */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /*

    nav {
      position: fixed;
      display: none;
      text-align: center;

      background-color: rgba(0, 0, 0, 0.5);
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .close-hamburguer {
        display: block;
        width: 40%;
        height: 100%;
      }

      ul {
        flex-direction: column;
        background-color: #222;
        width: 60%;
        height: 100%;

        li {

          a {
             padding: 4px 8px;
            border-bottom: 3px solid transparent;
            transition: .3s ease-in-out;

            &:hover {
              border-bottom: 3px solid #bb9e6b;
            }
          }

          .active {
             border-bottom: 3px solid #bb9e6b;
            background-color: #bb9e6b;
          }
        }
        .schedule-btn {
          margin-left: 0px;
          background: #bb9e6b;
          border: 2px solid #bb9e6b;
          padding: 12px 20px;

          &:hover {
            background-color: transparent;
            color: #bb9e6b
          }
        }
      }
    }

    .hamburguer {
      display: flex;
      flex-direction: column;
      width: 24px;
      height: 21px;
      gap: 6px;

      .line {
        background-color: #fff;
        width: 100%;
        height: 3px;
        transition: .3s ease-in;
      }

      .line1 {

      }

      .line2 {

      }

      .line3 {

      }
    }

    .show-menu {
      .line1 {
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.1);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.1);
      }
    }*/
  }
`;
