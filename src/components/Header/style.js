import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #3707cf;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;

  .logoHeader {
    max-width: 200px;
  }

  .rightHeader {
    width: 100%;
    display: flex;
    justify-content: center;

    input {
      width: 80%;
      padding: 15px 25px;
      border-radius: 15px;
      border: none;
    }

    .basketButton {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 3%;
    justify-content: space-between;

    .rightHeader {
      display: flex;
      gap: 2rem;
      width: 40%;
      align-items: center;

      input {
        width: 400px;
      }

      .basketButton {
        display: block;
        font-size: 34px;
        color: white;
      }
    }
  }
`;
