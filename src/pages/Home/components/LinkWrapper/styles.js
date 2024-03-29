import styled, { css } from 'styled-components';

export const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    display: block;
    padding: 13px 16px;
    border-radius: 99px;
    font-size: .9375rem;
    font-weight: 500;

    ${({ theme, $backgroundColor }) => (
    $backgroundColor === 'dark'
      ? css`
        background-color: ${theme.colors.dark.darker};
        color: #fff;
        `
      : css`
      background-color: #fff;
      color: #000;
      `
  )}

    &:hover {
      opacity: 0.9;
    }
  }
`;
