import styled from 'styled-components';

export const HourButton = styled.button`
  background-color: ${({ theme }) => theme.colors.dark.darker};
  width: fit-content;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  color: #fff;
  font-size: 18px;
  border: none;
  transition: background 0.2s ease-in;
  margin-right: auto;
  margin: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.dark.dark};
  }
`;
