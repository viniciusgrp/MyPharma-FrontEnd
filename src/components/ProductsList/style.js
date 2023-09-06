import styled from "styled-components";

export const ProductListStyle = styled.ul`
  padding-top: 2rem;
  h3 {
    margin: 0 auto 15px auto;
    padding-left: 1rem;
    font-size: 22px;
    font-weight: 500;
  }

  .upperUlProducts {
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    .selectsProducts {
      width: 100%;
      display: flex;
      gap: 16px;
      justify-content: center;
    }
    select {
      width: 130px;
      padding: 5px 10px;
      border-radius: 8px;
    }
  }

  .liProducts {
    padding: 2rem 0;
    width: 90%;
    margin: 0 auto;
    overflow: auto;
    display: flex;
    gap: 2rem;

    li {
      padding: 1rem 0;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 150px;
      gap: 1rem;
      cursor: pointer;
      -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

      :hover {
        -webkit-box-shadow: 0px 0px 20px -1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.75);
      }

      .productImg {
        width: 130px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .infosProduct {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
        gap: 1rem;

        .oldPrice {
          background-color: white;
          border: 1px solid black;
          padding: 5px;
          border-radius: 10px;
          color: red;
          position: absolute;
          top: -50%;
          right: 3%;
          text-decoration: line-through;
        }

        p {
          font-size: 18px;
        }

        .productName {
          height: 2rem;
          text-align: center;
        }

        span {
          font-weight: 600;
          font-size: 20px;
        }

        button {
          background-color: blue;
          color: white;
          border: none;
          padding: 10px 20px;
          width: 80%;
          border-radius: 8px;
          cursor: pointer;

          :hover {
            transition: 700ms;
            background-color: #566ef7;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 1500px;
    margin: 0 auto;
    h3 {
        margin: 0;
      padding-left: 5%;
    }
    .liProducts {
      li {
        width: 16%;
        min-width: 180px;
      }
    }
    .liProducts {
    padding: 3%;
      overflow: none;
      flex-wrap: wrap;
      justify-content: center;
    }
    .upperUlProducts {
      width: 95%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .selectsProducts {
        gap: 2rem;
        max-width: 30%;

        select {
          width: 200px;
        }
      }
    }
  }
`;
