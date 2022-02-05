import styled from "styled-components";

const ButtonStyle = styled.button`
    background: #555;
    color: ${({theme}) => theme.colors.font.primary};
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
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

export default ButtonStyle
