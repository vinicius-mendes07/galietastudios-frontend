import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const CalendarContainer = styled.div``;

export const HourContainer = styled.div`
  margin-top: 24px;
  max-width: 500px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

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
  border: 2px solid transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.dark.dark};
  }


  ${({ theme, $selectedHour }) => ($selectedHour && css`
    background-color: ${theme.colors.white.light} !important;
    color: ${theme.colors.dark.dark} !important;
    border: 2px solid ${theme.colors.dark.lighter};
  `)}
`;
