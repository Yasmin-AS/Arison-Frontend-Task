import { Routes, Route } from "react-router-dom";

import NotFound from "../pages/error/404";

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;
