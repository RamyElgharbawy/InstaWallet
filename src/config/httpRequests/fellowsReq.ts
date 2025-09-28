import axiosInstance from "../axios.config";

// get fellow list func
export const getAllFellows = async () => {
  const { data } = await axiosInstance.get("/fellows/myFellows");
  return data;
};
