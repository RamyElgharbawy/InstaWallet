/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../axios.config";
import type { LoginCredentials, signupCredentials } from "../../interfaces";

// login function
export const loginUser = async (credentials: LoginCredentials) => {
  try {
    const { data } = await axiosInstance.post(`/auth/login`, credentials);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// signup function
export const signup = async (credentials: signupCredentials) => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", credentials);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};
