import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.dark.light};
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 20px;
  width: 220px;
  position: fixed;
  top: 73px;
  bottom: 0;
  left: 0;

  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
  }

  .active {
    background-color: ${({ theme }) => theme.colors.dark.dark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 53px
  }
`;
