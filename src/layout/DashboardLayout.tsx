import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
