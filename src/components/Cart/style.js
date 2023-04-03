import styled from "styled-components";

export const CartStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* max-width:100vw; */
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;

  .cart {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .headerCart {
      height: 100px;
      width: 100%;
      background-color: #3707cf;
      display: flex;
      align-items: center;
      padding: 30px;
      justify-content: space-between;
      color: white;
      font-size: 22px;

      button {
        border: 1px solid white;
        color: white;
        background-color: transparent;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
    }
  }

  .productsCart {
    width: 100%;
    height: 75%;

    .cartWithProducts {
      padding: 1rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 90%;
      margin: 0 auto;
      max-height: 90%;
      overflow: auto;

      li {
        max-width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-between;
        padding: 1rem 3rem 1rem 1rem;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

        :hover {
          -webkit-box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);
        }

        .imgCart {
          width: 150px;
          max-height: 130px;
          display: flex;
          justify-content: center;

          img {
            max-width: 100%;
            max-height: 100%;
            background-color: transparent;
          }
        }

        .productsInfoCart {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .quantityDiv {
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            font-size: 20px;

            button {
              background-color: rgba(77, 77, 77, 0.1);
              border: none;
              padding: 5px 10px;
              font-size: 22px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .checkoutButton {
    width: 80%;
    margin: 0 auto;
    background-color: #3707cf;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 15px 20px;
    cursor: pointer;
  }

  .totalCart {
    width: 80%;
    margin: 0 auto 1rem auto;
    display: flex;
    justify-content: space-between;

    p {
        font-weight: 600;
        font-size: 22px;
    }
  }

  @media screen and (min-width: 768px){
    .cart {
        width: 40%;
        max-width: 500px;
        position: absolute;
        top: 0;
        right: 0;
    }
  }
`;
