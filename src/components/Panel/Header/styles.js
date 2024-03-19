import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 3;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;


    img {
      display: block;
      max-width: 100px;
    }

    .user-container{
      position: relative;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;

      .user {
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.dark.light};

        &:hover{
          color: ${({ theme }) => theme.colors.dark.darker};
        }

        svg {
          width: 30px;
        }
      }

      .user-info {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 120px;
        overflow: hidden;
        height: 0;
        background-color: ${({ theme }) => theme.colors.dark.lighter};
        border-radius: 4px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
        transition: 0.2s;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.dark.main};
          color: #fff;
          transition: 0.3s;
          font-size: 18px;

          &:hover {
            color: ${({ theme }) => theme.colors.dark.light};
          }
        }

        button {
          width: 90%;
          background-color: transparent;
          border: none;
          font-size: 18px;
          color: ${({ theme }) => theme.colors.dark.main};
          color: #fff;
          transition: 0.3s;

          &:hover {
            color: ${({ theme }) => theme.colors.dark.light};
          }
        }
      }
    }

    .show-menu {
      .user-info {
        height: 60px;
      }
    }

  }


  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {

  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 20px;

    img {
      width: 70px;
    }

    .container {
      .user-container {
        /* background-color: red; */
        justify-content: flex-end;
      }
    }
  }
`;
