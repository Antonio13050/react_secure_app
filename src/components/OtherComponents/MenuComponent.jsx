import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

export const MenuComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("Tema atual: ", theme);
    }, [theme]);

    return (
        <div>
            <button>
                <Link aria-label="Ir para home" to="/">
                    Home
                </Link>
            </button>
            <button>
                <Link aria-label="Ir para sobre" to="/sobre">
                    Sobre
                </Link>
            </button>

            <LogoutButton></LogoutButton>
            <button onClick={toggleTheme}>Alterar Tema</button>
        </div>
    );
};
