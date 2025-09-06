import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";

const DashboardLayout = () => {
  return (
    <>
      <ProtectedRoute>
        <Sidebar />
        <Outlet />
      </ProtectedRoute>
    </>
  );
};

export default DashboardLayout;
