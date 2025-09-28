import type { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/authHook";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
