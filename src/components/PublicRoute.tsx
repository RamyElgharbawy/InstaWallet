import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/authHook";
import type { ReactNode } from "react";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/user" replace />;
  }

  return <>{children}</>;
};
export default PublicRoute;
