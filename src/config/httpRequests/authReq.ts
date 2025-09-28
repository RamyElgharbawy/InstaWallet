import axiosInstance from "../axios.config";
import type { LoginCredentials, signupCredentials } from "../../interfaces";

// login function
export const loginUser = async (credentials: LoginCredentials) => {
  const { data } = await axiosInstance.post(`/auth/login`, credentials);
  return data;
};

// signup function
export const signup = async (credentials: signupCredentials) => {
  const { data } = await axiosInstance.post("/auth/signup", credentials);
  return data;
};
