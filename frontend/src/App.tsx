import { Navigate, useLocation } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { useAuthStore } from "./store/authStore";

function App() {
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated && !location.pathname.startsWith("/login")) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && !location.pathname.startsWith("/admin")) {
    return <Navigate to="/admin" replace />;
  }

  return <>{isAuthenticated ? <AdminRoutes /> : <AuthRoutes />}</>;
}

export default App;
