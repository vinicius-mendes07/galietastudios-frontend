import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .details {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 8px;
      display: block;
    }
  }
`;
