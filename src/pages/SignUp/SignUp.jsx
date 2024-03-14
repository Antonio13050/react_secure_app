import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Form, UserInput, Button, Error } from "./styles";

export default function SignUp() {
    const NewUserRegistrationSchema = z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z
            .string()
            .min(1, "E-mail é obrigatório")
            .email("E-mail inválido"),
        password: z.string().min(1, "Senha é obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(NewUserRegistrationSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="content">
            <Form onSubmit={handleSubmit(onSubmit)} className="row">
                <Text className="">Nome:</Text>
                <UserInput type="text" className="" {...register("name")} />
                <Error className="">{errors.name?.message}</Error>

                <Text className="">E-mail:</Text>
                <UserInput type="email" className="" {...register("email")} />
                <Error className="">{errors.email?.message}</Error>

                <Text className="">Senha:</Text>
                <UserInput
                    type="password"
                    className=""
                    {...register("password")}
                />
                <Error className="">{errors.password?.message}</Error>

                <Button type="submit" className="">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}
