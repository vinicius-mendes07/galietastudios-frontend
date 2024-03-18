import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white.main};
  min-height: 100vh; // ajustar depois que colocar o footer
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 250px;
  }

  h1 {
    font-size: 40px;
    margin: 16px;
  }

  p {
    max-width: 500px;
    font-size: 20px;
    font-weight: bold;
  }

  span {
    display: block;
  }

  a {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.success.main};
    border: 2px solid ${({ theme }) => theme.colors.success.main};

    padding: 16px;
    border-radius: 4px;
    margin-top: 16px;
    color: #fff;
    font-weight: bold;
    transition: 0.3s ;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

    &:hover {
      transform: scale(1.1);
    }
  }

`;
