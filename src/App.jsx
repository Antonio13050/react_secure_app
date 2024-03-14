import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/Routes";
import { useAuth } from "./context/AuthContext";
import SideBarComponent from "./components/OtherComponents/SideBarComponent.jsx";
import HeaderComponent from "./components/OtherComponents/HeaderComponent.jsx";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <ThemeProvider>
                <Router>
                    {isAuthenticated ? (
                        <div className="grid-container">
                            <SideBarComponent />
                            <HeaderComponent />
                            <RoutesComponent />
                        </div>
                    ) : (
                        <RoutesComponent />
                    )}
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
