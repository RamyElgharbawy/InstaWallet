/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../axios.config";

// update user profile req
export const updateUserProfile = async (updatedData: any) => {
  try {
    const { data } = await axiosInstance.put(
      "/users/updateMyData",
      updatedData
    );
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};

// change user password
export const changeUserPassword = async (pass: any) => {
  try {
    const { data } = await axiosInstance.put(`/users/changeMyPassword`, pass);
    return data;
  } catch (error: any) {
    console.log("API error response", error.response?.data);
    throw error;
  }
};
