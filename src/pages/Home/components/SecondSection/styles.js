import styled from 'styled-components';

export const Container = styled.section`
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
