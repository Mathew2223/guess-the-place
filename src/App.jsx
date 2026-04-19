import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './App.css'
import { useState } from "react";

export default function App() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [isLoggingOut, setIsLoggingout] = useState(false);

    const handleLogout = () => {
        setIsLoggingout(true);
        logout();
        navigate("/guess-the-place/login");
    }

    return (
        <>
            <nav className="nav-link">
                {user ? (
                    <>
                        <span>Здарова {user.name}</span>
                        <button
                            onClick={handleLogout}
                            className="logout-btn"
                            disabled={isLoggingOut}
                        >
                            Выйти
                        </button>
                    </>
                ) : (
                    <Link to="/guess-the-place/login" className="start-button">
                        {location.pathname === "/guess-the-place/login" ? "Ты здесь" : "Войти"}
                    </Link>
                )}
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}