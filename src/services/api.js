export const apiLogin = (username, password) => {
    if (username === "admin@teste.com" && password === "pass") {
        return {
            success: true,
            token: "jwt",
            user: { id: 1, name: "Yan Esteves", username },
        };
    } else {
        throw new Error("Auth falhou.");
    }
};
