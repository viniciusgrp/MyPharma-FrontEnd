import styled from "styled-components";

export const ProductStyle = styled.div`
padding: 2rem;
  width: 80%;
  margin: 2rem auto;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .img {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .productInfos {
    display: flex;
    font-size: 22px;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    font-weight: 600;

    .quantityInStock {
        color: green;
    }

    span {
        position: absolute;
        top: 0;
        right: 0;
        display: inline;
        text-decoration: line-through;
        color: red;
        padding: 10px;
        background-color: #f4f4f4 ;
        width: fit-content;
    }

    .selectQuantity {
        display: flex;
        align-items: center;;
        justify-content: center;
        width: fit-content;
        padding: 10px 20px;
        gap: 10px;
        border: 1px solid black;
        border-radius: 25px;

        button {
            background-color: transparent;
            border: none;
            font-size: 22px;
            cursor: pointer;
        }
  }

  .buyButton {
    margin: 2rem auto;
    width: 100%;
    padding: 15px 30px;
    border-radius: 20px;
    background-color: blue;
            border: none;
            color: white;
            cursor: pointer;
  }
  }
  @media screen and (min-width: 768px){
    flex-direction: row;
    align-items: center;
    max-height: 600px;
    justify-content: space-between;
    padding: 2rem 10% 1rem 3%;

    .img {
        max-width: 70%;

        img {
            max-width: 70%
        }
    }

    .productInfos {
        span {
        right: -50px;
    }
    }
  }
`;
