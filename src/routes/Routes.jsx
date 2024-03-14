import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";

import { useAuth } from "../context/AuthContext.jsx";

export default function RoutesComponent() {
    const { isAuthenticated } = useAuth();

    const loginRedirect = (children) => {
        if (isAuthenticated) {
            return <Navigate to="/" replace />;
        }

        return children;
    };

    return (
        <Routes>
            <Route path="/login" element={loginRedirect(<Login />)} />

            {isAuthenticated ? (
                <>
                    <Route path="sobre" Component={About} />
                    <Route path="/" exact Component={Home} />
                </>
            ) : (
                <Route path="*" element={<Navigate replace to="/login" />} />
            )}
        </Routes>
    );
}
