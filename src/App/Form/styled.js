import styled from "styled-components";

export const Button = styled.button`
   width: 100%;
    background: teal;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.teal};
    border-radius: 5px;
    padding: 7px;
    font-size: 16px;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const Field = styled.input`
 max-width: 350px;
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 5px;
`;

export const Header = styled.h1`
    text-align: center;
    margin: 12px auto;
    font-size: 28px;
`;

export const LabelText = styled.span`
    display: inline-block;
    max-width: 140px;
    width: 100%;
    margin-right: 5px;
`;

export const Info = styled.p`
    font-size: small;
    color: ${({ theme }) => theme.color.gray};
    margin-bottom: 2px;
`;

export const Select = styled.select`
 max-width: 350px;
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 5px;
`;




