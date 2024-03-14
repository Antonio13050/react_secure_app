import React from "react";
import { Container, Title } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

export default function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme} className="content">
            <Title theme={theme}>Home</Title>
        </Container>
    );
}
