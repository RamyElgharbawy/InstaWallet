import axiosInstance from "../axios.config";

// Get spending list
export const getSpendingList = async () => {
  const { data } = await axiosInstance.get("/spendings/mySpendings");
  return data;
};
