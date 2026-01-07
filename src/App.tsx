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
import PublicRoute from "./components/PublicRoute";
import UpdateFellowPage from "./pages/Fellows/UpdateFellowPage";
import SpendingDetailsPage from "./pages/Spending/SpendingDetailsPage";
import UpdateSpendingPage from "./pages/Spending/UpdateSpendingPage";
import UpdateUserProfilePage from "./pages/UpdateUserProfilePage";
import ChangeUserPasswordPage from "./pages/ChangeUserPasswordPage";

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Routes [Public]*/}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />

        {/* App Layout */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* User Dashboard Layout [Private]*/}
        <Route path="/user" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="statistics" element={<UserDashboard />} />
          <Route path="profile">
            <Route index element={<UserProfilePage />} />
            <Route path="edit/:userId" element={<UpdateUserProfilePage />} />
            <Route
              path="changePassword/:userId"
              element={<ChangeUserPasswordPage />}
            />
          </Route>
          {/* User Fellows Route */}
          <Route path="fellows">
            <Route index element={<FellowsPage />} />
            <Route path="addFellow" element={<AddFellowPage />} />
            <Route path=":fellowId">
              <Route index element={<FellowDetailsPage />} />
              <Route path="edit" element={<UpdateFellowPage />} />
            </Route>
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
            <Route path=":spendingId">
              <Route index element={<SpendingDetailsPage />} />
              <Route path="edit" element={<UpdateSpendingPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
