import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {

    .name-wrapper {
      margin-bottom: 16px;
      .name {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        small {
          padding: 4px 8px;
          border-radius: 4px;
          color: ${({ theme }) => theme.colors.dark.light};
          background-color: ${({ theme }) => theme.colors.white.main};
        }
      }

      span {
       color: ${({ theme }) => theme.colors.gray[200]};
      }
    }

    .date-wrapper {

      .date {
        span {
          margin-left: 8px;
        }
      }

      > span {
        color: ${({ theme }) => theme.colors.gray[200]};
      }
    }

    .service-type {
      display: block;
      margin-top: 8px;
      font-weight: bold;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    button {
      background-color: transparent;
      border: none;
    }

    .btn-confirm {

      img {
        color: #ff0000;
        background-color: ${({ theme }) => theme.colors.success.main};
        border-radius: 4px;
        padding: 3px;
      }
    }
  }
`;
