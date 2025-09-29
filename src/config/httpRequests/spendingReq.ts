/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ISpending } from "../../interfaces";
import axiosInstance from "../axios.config";

// get spending list
export const getAllSpending = async () => {
  try {
    const { data } = await axiosInstance.get("/spendings/mySpendings");
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// get specific spending
export const getSpecificSpending = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/spendings/${id}`);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// create new spending
export const addNewSpending = async (spending: ISpending) => {
  try {
    const { data } = await axiosInstance.post("/spendings", spending);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// update specific spending
export const updateSpecificSpending = async (
  id: string,
  spending: ISpending
) => {
  try {
    const { data } = await axiosInstance.put(`/spendings/${id}`, spending);
    return data;
  } catch (error) {
    console.log("API error response", error);
    throw error;
  }
};

// delete specific spending
export const deleteSpecificSpending = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/spendings/${id}`);
    return data;
  } catch (error) {
    console.log("API error response", error);
    throw error;
  }
};
