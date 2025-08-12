import { Routes, Route } from "react-router-dom";
import ErrorRoutes from "./ErrorRoutes";
import LoginPage from "../pages/auth/LoginPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};

export default AuthRoutes;
