import styled from "styled-components";

export const InputStyle = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 40%;
    font-size: ${({theme}) => theme.fontSize.sm};
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
`;
