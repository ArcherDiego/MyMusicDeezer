import styled from "styled-components";

export const CardStyle = styled.div`
    margin: 35px;
    width: 40%;
    height: 150px;
    background-color: #555;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const DivTextStyle = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    width: 100%;
    height: 100%;
    padding: 10px;

    img {
        bottom: 0;
    }
    h2 {
        padding: 5px;
    }
    P {
        padding: 5px;
    }
`;

export const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
`;

export const ButtonStyle = styled.button`
    background: #40A3FF;
    color: ${({theme}) => theme.colors.font.primary};
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
    height: 45px;
    cursor: pointer;
    transition: 0.1s;

    &:focus, :hover {
        outline: none;
        box-shadow: 0 0 0 3px #40A3FF, 0 0 0 4px #33322E;
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;

export const PlayButtonStyle = styled.button`
    background: #33322E;
    color: ${({theme}) => theme.colors.font.primary};
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
    height: 45px;
    cursor: pointer;
    transition: 0.1s;

    &:focus, :hover {
        outline: none;
        box-shadow: 0 0 0 3px #40A3FF, 0 0 0 4px #33322E;
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;
