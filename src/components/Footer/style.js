import styled from "styled-components";

export const FooterStyle = styled.footer`
margin-top: 3rem;
    min-height: 250px;
    background-color: #3707cf;
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    justify-content: space-between;

    .leftFooter {
        display: flex;
        flex-direction: column;
        gap: 25px;
        a {
            color: white;
            text-decoration: none;
            font-size: 22px;
        }
    }

    .infosMarket {
        display: flex;
        flex-direction: column;
        gap: 25px;

        li {
            display: flex;
            gap: 1rem;
            color: white;
        }
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
    }
`