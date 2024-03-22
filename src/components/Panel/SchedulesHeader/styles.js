import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 48px;
  h1 {
    margin-bottom: 24px;
  }
  nav {
    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      li {
        a {
          text-decoration: none;
          color: inherit;
          border-bottom: 2px solid transparent;
          padding: 4px;
          transition: 0.3s ease-in;

          &:hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.dark.dark};
          }
        }

        .active {
          border-bottom: 2px solid ${({ theme }) => theme.colors.dark.dark};
        }
      }
    }
  }
`;
