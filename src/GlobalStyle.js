import { createGlobalStyle } from "styled-components";
import currency from "./currency.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border - box;
    }

    *,
    ::after,
    ::before {
    box-sizing: inherit;
    }

    #root {
    font-family: 'Lato', sans-serif;
    line-height: 1.5;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    resize: both;
    overflow: auto;
    background-image: url("${currency}");
    background-size: cover;
    background-position: center;
    }
`;