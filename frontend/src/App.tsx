import { Navigate, useLocation } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { useAuthStore } from "./store/authStore";

function App() {
  const isAuthenticated = true; // replace with real auth logic using ... fetch and check token using zustand and tanstack query
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  // Allow unauthenticated users only on /login or /auth routes
  if (!isAuthenticated && !location.pathname.startsWith("/login")) {
    return <Navigate to="/login" replace />;
  }

  // Allow authenticated users only on /admin routes
  if (isAuthenticated && !location.pathname.startsWith("/admin")) {
    return <Navigate to="/admin" replace />;
  }

  return <>{isAuthenticated ? <AdminRoutes /> : <AuthRoutes />}</>;
}

export default App;
