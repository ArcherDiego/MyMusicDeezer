import styled from "styled-components";

export const CardStyle = styled.div`
    margin: 35px;
    height: auto;
    background-color: #555;
    border-radius: ${({theme}) => theme.border};
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

    h2 {
        padding: 5px;
    }
    P {
        padding-left: 5px;
        font-size: ${({theme}) => theme.fontSize.sm};
    }
`;

export const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
`;

export const ButtonStyle = styled.button`
    background: ${({theme}) => theme.colors.button};
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

export const TimePlayStyle = styled.div`
    display: flex;
    align-items: center;

    p {
        padding: 5px;
        font-size: ${({theme}) => theme.fontSize.md};
        font-family: ${({theme}) => theme.fontFamily.second};
    }
    button {
        background: ${({theme}) => theme.colors.background.primary};
        color: ${({theme}) => theme.colors.font.primary};
        border-radius: 50px;
        border: none;
        height: 45px;
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({theme}) => theme.fontSize.lg};
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
    } 
`;

export const HeartStyle = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    button {
        padding: 5px;
        font-size: ${({theme}) => theme.fontSize.lg};
        background: transparent;
        border: none;

        &:hover {
            color: ${({theme}) => theme.colors.heart};
        }
    }
`;
