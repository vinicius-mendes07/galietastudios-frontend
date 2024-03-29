import styled from 'styled-components';

import manHome from '../../../../assets/images/man-home.jpeg';

export const Container = styled.section`
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
