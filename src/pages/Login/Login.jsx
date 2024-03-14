import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

import { Text, Form, UserInput, Button, Error, Container } from "./styles";

const formLoginSchema = z.object({
    email: z.string().min(1, "Digite o e-mail").email("E-mail inválido"),
    password: z.string().min(1, "Digite a senha"),
});

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formLoginSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await apiLogin(data.email, data.password);
            if (response.success) {
                login(response);
                navigate("/");
            } else {
                // alert('Usuário ou senha incorretos')
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container>
            <div className="content">
                <Form onSubmit={handleSubmit(onSubmit)} className="">
                    <Text>E-mail</Text>
                    <UserInput
                        type="email"
                        className=""
                        placeholder="name@example.com"
                        {...register("email")}
                    />
                    {errors.email && <Error>{errors.email.message}</Error>}
                    <Text>Senha</Text>
                    <UserInput
                        type="password"
                        className=""
                        placeholder="Senha"
                        {...register("password")}
                    />
                    {errors.password && (
                        <Error>{errors.password.message}</Error>
                    )}
                    <Button className="" type="submit">
                        Entrar
                    </Button>
                    <p>login: admin@teste.com / senha: pass</p>
                </Form>
            </div>
        </Container>
    );
}
