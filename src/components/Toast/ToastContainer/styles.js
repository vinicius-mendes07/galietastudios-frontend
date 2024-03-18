import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 48px;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80%;
  }
`;
