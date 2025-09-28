/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IFellow } from "../../interfaces";
import axiosInstance from "../axios.config";

// get fellow list
export const getAllFellows = async () => {
  try {
    const { data } = await axiosInstance.get("/fellows/myFellows");
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// get specific fellow
export const getSpecificFellow = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/fellows/${id}`);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// create new fellow
export const addNewFellow = async (fellow: IFellow) => {
  try {
    const { data } = await axiosInstance.post("/fellows", fellow);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// update specific fellow
export const updateSpecificFellow = async (id: string, fellow: IFellow) => {
  try {
    const { data } = await axiosInstance.put(`/fellows/${id}`, fellow);
    return data;
  } catch (error) {
    console.log("API error response", error);
    throw error;
  }
};

// delete specific fellow
export const deleteSpecificFellow = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/fellows/${id}`);
    return data;
  } catch (error) {
    console.log("API error response", error);
    throw error;
  }
};
