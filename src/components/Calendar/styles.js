import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.dark.dark};
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  header {
    display: flex;
    padding: 25px 30px 10px;
    justify-content: space-between;
    align-items: center;

    .current-date {
      font-size: 24px;
      font-weight: 500;
    }

    .icons {
      button {
        background-color: transparent;
        border: none;
        width: 38px;
        height: 38px;

        color: ${({ theme }) => theme.colors.dark.lighter};
        font-size: 1.9rem;
        line-height: 38px;
        text-align: center;
        margin: 0 1px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white.light};
        }

        &:last-child {
          margin-right: -10px;
        }
      }
    }
  }

  .calendar {
    padding: 20px;

    ul {
      list-style: none;
      display: flex;
      text-align: center;
      flex-wrap: wrap;

      li {
        width: calc(100%/7);
      }
    }

    .days {
      margin-bottom: 20px;

      li {
        margin-top: 30px;
        position: relative;
        z-index: 1;


        button {
          width: 40px;
          height: 40px;
          font-size: 16px;
          border-radius: 50%;
          background-color: transparent;
          border: none;

          &::before {
            position: absolute;
            content: "";
            height: 40px;
            width: 40px;
            left: 50%;
            top: 50%;
            border-radius: 50%;
            z-index: -1;
            transform: translate(-50%, -50%);
          }

          &:hover::before {
            background-color: ${({ theme }) => theme.colors.white.main};
          }

          &:disabled {
            cursor: default;
            color: #aaa;

            &:hover::before{
              background-color: transparent;
            }
          }
        }

        .today {
            color: #fff;

            &::before {
              background-color: ${({ theme }) => theme.colors.dark.lighter};
            }
            &:hover::before {
              background-color: ${({ theme }) => theme.colors.dark.light};
            }
        }
        .selected-day {
          color: #fff;

          &::before {
            background-color: ${({ theme }) => theme.colors.dark.dark};
          }
          &:hover::before {
            background-color: ${({ theme }) => theme.colors.dark.dark};
          }
        }
      }
    }

    .weeks {
      li {
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
`;
