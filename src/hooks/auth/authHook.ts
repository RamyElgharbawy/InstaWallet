import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axios.config";
import { loginUser, signup } from "../../config/httpRequests/authReq";

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Save JWT token to cookies
      const In_Days: number = 3;
      setCookie("jwt", data.token, {
        path: "/",
        expires: new Date(Date.now() + In_Days * 24 * 60 * 60 * 1000),
        // sameSite: "strict",
      });

      // Navigate to dashboard
      navigate("/user");
    },
    onError: (error: Error) => {
      console.error("Login failed:", error.message);
    },
  });

  // signup mutation
  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      // Save JWT token to cookies
      const In_Days: number = 3;
      setCookie("jwt", data.token, {
        path: "/",
        expires: new Date(Date.now() + In_Days * 24 * 60 * 60 * 1000),
        // sameSite: "strict",
      });
      navigate("/user");
    },
    onError: (error: Error) => {
      console.error("Signup failed:", error.message);
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {},
    onSuccess: () => logout(),
    onError: () => logout(), // Force logout even if API fails
  });

  // User query
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // First check if we have cached data
      const cachedData = queryClient.getQueryData(["user"]);
      if (cachedData) {
        return cachedData;
      }

      // If no cached data, fetch from API
      if (!cookies.jwt) return null;

      const { data } = await axiosInstance.get("/users/profile");
      return data;
    },
    enabled: !!cookies.jwt,
    staleTime: 5 * 60 * 1000,
  });

  // Logout function
  const logout = () => {
    removeCookie("jwt", { path: "/" });
    document.cookie =
      "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=; secure=false;";
    queryClient.clear();
    window.location.href = "/";
  };

  return {
    // Login
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginIsError: loginMutation.isError,
    loginError: loginMutation.error,

    // Signup
    signup: signupMutation.mutate,
    signupAsync: signupMutation.mutateAsync,
    isSigningUp: signupMutation.isPending,
    signupIsError: signupMutation.isError,
    signupError: signupMutation.error,

    // Logout
    logout,
    logoutAsync: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,

    // User data
    user: userQuery.data,
    isLoadingUser: userQuery.isLoading,
    userError: userQuery.error,

    // Auth state
    isAuthenticated: !!cookies.jwt && !!userQuery.data,
    token: cookies.jwt,
  };
};
