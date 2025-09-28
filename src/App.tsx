import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./layout/DashboardLayout";
import UserDashboard from "./pages/UserDashboard";
import FellowsPage from "./pages/Fellows/FellowsPage";
import ItemsPage from "./pages/Items/ItemsPage";
import SpendingsPage from "./pages/Spending/SpendingsPage";
import AddFellowPage from "./pages/Fellows/AddFellowPage";
import AddItemPage from "./pages/Items/AddItemPage";
import AddSpendingPage from "./pages/Spending/AddSpendingPage";
import ItemDetailsPage from "./pages/Items/ItemDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import FellowDetailsPage from "./pages/Fellows/FellowDetailsPage";
import UpdateItemPage from "./pages/Items/UpdateItemPage";

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* App Layout */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* User Dashboard Layout*/}
        <Route path="/user" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="statistics" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfilePage />} />
          {/* User Fellows Route */}
          <Route path="fellows">
            <Route index element={<FellowsPage />} />
            <Route path="addFellow" element={<AddFellowPage />} />
            <Route path="editFellow" element={<AddFellowPage />} />
            <Route path="details" element={<FellowDetailsPage />} />
          </Route>
          {/* User Items Route */}
          <Route path="items">
            <Route index element={<ItemsPage />} />
            <Route path="addItem" element={<AddItemPage />} />
            <Route path=":itemId">
              <Route index element={<ItemDetailsPage />} />
              <Route path="edit" element={<UpdateItemPage />} />
            </Route>
          </Route>

          {/* User Spendings Route */}
          <Route path="spendings">
            <Route index element={<SpendingsPage />} />
            <Route path="addSpending" element={<AddSpendingPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
