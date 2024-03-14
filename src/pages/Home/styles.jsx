import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    font-size: 24px;
`;

export const Container = styled.div`
    background-color: ${(props) => (props.theme === "light" ? "#fff" : "#000")};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
