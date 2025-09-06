import axiosInstance from "./axios.config";
import type { LoginCredentials } from "../interfaces";

// get items list func
export const getAllItems = async () => {
  const { data } = await axiosInstance.get("/items/myItems");
  return data;
};

// get fellow list func
export const getAllFellows = async () => {
  const { data } = await axiosInstance.get("/fellows/myFellows");
  return data;
};

// get spending list func
export const getSpendingList = async () => {
  const { data } = await axiosInstance.get("/spendings/mySpendings");
  return data;
};

// get item details function
export const getItem = async () => {
  const { data } = await axiosInstance.get(
    `/items/d0a76a19-68ca-4d98-8afa-ddeadd3cf516`
  );
  return data;
};

// login function
export const loginUser = async (credentials: LoginCredentials) => {
  const { data } = await axiosInstance.post(`/auth/login`, credentials);
  return data;
};
