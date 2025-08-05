import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./layout/DashboardLayout";
import UserDashboard from "./pages/UserDashboard";
import FellowsPage from "./pages/FellowsPage";
import ItemsPage from "./pages/ItemsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="/user" element={<DashboardLayout />}>
          <Route path="home" element={<UserDashboard />} />
          <Route path="fellows" element={<FellowsPage />} />
          <Route path="items" element={<ItemsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
