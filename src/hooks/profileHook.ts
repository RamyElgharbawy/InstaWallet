/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../config/axios.config";
import { useCookies } from "react-cookie";
import {
  changeUserPassword,
  updateUserProfile,
} from "../config/httpRequests/profileReq";
import { useNavigate } from "react-router-dom";
import { Toast, useToast } from "@chakra-ui/react";

export const useProfile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();

  const [cookies] = useCookies(["jwt"]);

  // User query
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // First check if we have cached data
      // const cachedData = queryClient.getQueryData(["user"]);
      // if (cachedData) {
      //   return cachedData;
      // }

      // // If no cached data, fetch from API
      // if (!cookies.jwt) return null;

      const { data } = await axiosInstance.get("/users/profile");
      return data;
    },
    enabled: !!cookies.jwt,
    staleTime: 5 * 60 * 1000,
  });

  // update Profile mutation
  const updateMyProfile = useMutation({
    mutationFn: (values: any) => updateUserProfile(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      navigate(-1);
    },
    onError: (error) => {
      console.error("Can't update profile", error.message);
      Toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  //  change user password mutation
  const changeMyPassword = useMutation({
    mutationFn: (values: any) => changeUserPassword(values),
    onSuccess: () => {
      // redirect to login page
      navigate("/login");
    },
    onError: (error: any) => {
      console.error("Can't update password", error.message);
      toast({
        title: "Error",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return {
    // User data
    user: userQuery.data,
    isLoadingUser: userQuery.isLoading,
    userError: userQuery.error,

    // update user profile mutation
    updateProfile: updateMyProfile.mutate,
    isUpdatingProfile: updateMyProfile.isPending,
    updatingProfileError: updateMyProfile.error,

    // update user profile mutation
    changePassword: changeMyPassword.mutate,
    isChangingPassword: changeMyPassword.isPending,
    changingPasswordError: changeMyPassword.error,
  };
};
