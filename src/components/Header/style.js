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
    cursor: pointer;
  }

  .rightHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    gap: 1rem;

    form {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 50px;

      input {
        width: 70%;
        padding: 15px 25px;
        border-radius: 15px 0 0 15px;
        border: none;
      }

        button {
            width: 15%;
            height: 100%;
            cursor: pointer;
            border: none;
            border-radius: 0px 15px 15px 0;
      }
    }
    
    .basketButton {
      display: block;
      font-size: 34px;
      color: white;
    }
    .cartHeader {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        p {
          color: white;
          font-size: 22px;
        }
      }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 3%;
    justify-content: space-between;

    .rightHeader {
      flex-direction: row;
      gap: 2rem;
      width: 40%;
      align-items: center;

      input {
        width: 400px;
      }

      
    }
  }
`;
