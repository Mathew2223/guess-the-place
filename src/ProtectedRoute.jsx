import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/guess-the-place/login" replace state={{ from: "/guess-the-place" }} />
    }
    return <Outlet />
}