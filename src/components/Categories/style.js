import styled from "styled-components";

export const CategoriesStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  margin: 0 auto;
  max-width: 1500px;
  list-style: none;
  font-size: 18px;
  font-weight: 500;

  h3 {
    padding-left: 1rem;
  }

  .categoriesList {
    margin: 0 auto;
    display: flex;
    overflow: auto;
    width: 90%;
    gap: 2rem;
    padding: 1rem;

    li {
      cursor: pointer;
      padding: 10px;
      min-width: 120px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

      :hover {
        -webkit-box-shadow: 0px 0px 20px -1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.75);
      }

      .categoryImg {
        border-radius: 10px;
        padding-top: 5px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      p {
        padding-bottom: 5px;
        font-size: 16px;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (min-width: 768px) {
    h3 {
      padding-left: 5%;
    }
  }
`;
