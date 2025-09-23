/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axios.config";
import type { LoginCredentials, signupCredentials } from "../interfaces";

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
export const getSpecificItem = async (id: string) => {
  const { data } = await axiosInstance.get(`/items/${id}`);
  return data;
};

// create new item function
export const addNewItem = async (item) => {
  try {
    const { data } = await axiosInstance.post("/items", item);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// update specific item
export const updateSpecificItem = async (id: string, item) => {
  try {
    const { data } = await axiosInstance.put(`/items/${id}`, item);
    return data;
  } catch (error) {
    console.log("API error response", error);
    throw error;
  }
};

// delete specific item
export const deleteSpecificItem = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/items/${id}`);
    return data;
  } catch (error) {
    console.log("API error response", error);
    throw error;
  }
};

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
