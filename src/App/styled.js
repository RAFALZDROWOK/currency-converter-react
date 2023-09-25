import styled from "styled-components";
import landscape from "./landscape.jpg";

export const Wrapper = styled.div`
    margin: 10px;
    padding: 0 26px;
    resize: both;
    overflow: auto;
    background-image: url("${landscape}");
    background-position: center;
    background-size: cover;
    flex-basis: 640px;
    min-height: 48vh;
    border-radius: 20px;
    border: 1px solid rgb(137, 126, 126);
`;