import styled from "styled-components";

export const PaginationStyle = styled.div`
padding-top: 2rem;
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;

    button {
        padding: 15px 20px;
        border-radius: 8px;
        background-color: blue;
        color: white;
        border: none;
    }

    @media screen and (min-width: 920px){
        max-width: 1000px;
    }
`