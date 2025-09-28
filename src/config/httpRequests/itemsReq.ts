/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IItem } from "../../interfaces";
import axiosInstance from "../axios.config";

// get items list func
export const getAllItems = async () => {
  try {
    const { data } = await axiosInstance.get("/items/myItems");
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// get specific item
export const getSpecificItem = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/items/${id}`);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// create new item
export const addNewItem = async (item: IItem) => {
  try {
    const { data } = await axiosInstance.post("/items", item);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// update specific item
export const updateSpecificItem = async (id: string, item: IItem) => {
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
