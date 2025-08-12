import { Routes, Route } from "react-router-dom";
import ErrorRoutes from "./ErrorRoutes";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="*" element={<ErrorRoutes />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
