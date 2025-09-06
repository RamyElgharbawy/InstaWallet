import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../config/httpReqUtils";
import { useCookies } from "react-cookie";

export const useLogin = () => {
  const queryClient = useQueryClient();
  // React-cookie hooks
  const [cookies, setCookie] = useCookies(["jwt"]);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const In_Days: number = 3;
      // Save JWT token to cookies
      setCookie("jwt", data.token, {
        path: "/",
        expires: new Date(Date.now() + In_Days * 24 * 60 * 60 * 1000),
        // sameSite: "strict",
      });

      // Cache user data in React Query
      queryClient.setQueryData(["user"], data.user);

      // Invalidate user-related queries
      queryClient.invalidateQueries({ queryKey: ["user"] });

      //  redirect after successful login to user dashboard
      window.location.href = "/user";
    },
    onError: (error: Error) => {
      console.error("Login failed:", error.message);
    },
  });
};
