import styled, { css } from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: 73px;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 2;

  .sidebar {
    background-color: ${({ theme }) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    padding: 60px 20px;
    gap: 20px;
    width: 220px;
    height: 100%;

    a {
      text-decoration: none;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.dark.dark};
    }
  }

  .btn-open-sidebar {
    display: none;
    border: none;
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 53px;
    left: -220px;
    transition: 0.5s;
    .sidebar {
      padding: 80px 20px;
    }

    .btn-open-sidebar {
      display: block;
      background: linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%);

      svg {
        background-color: ${({ theme }) => theme.colors.dark.lighter};
        color: #fff;
        border-radius: 0 50% 50% 0;
      }
    }

    ${({ theme, $showSidebar }) => $showSidebar && css`
    left: 0;

    .btn-open-sidebar {
      background: linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%);

      svg {
        background-color: transparent;
        color: ${theme.colors.dark.light};
        border-radius: 0 50% 50% 0;
      }
    }

    `}
  }
`;
