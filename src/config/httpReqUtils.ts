import axiosInstance from "./axios.config";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzM2FiMTY4Yy02NjdjLTQzNGYtYjdiNS02OTU3NmFhZjVlM2IiLCJpYXQiOjE3NTY3MTY5NTYsImV4cCI6MTc1OTMwODk1Nn0.ljscm9rJ5Q87-RCfT76Idn2-zHL__AlqgUhRaY3aUxo";

// get item details function
export const getItem = async () => {
  const { data } = await axiosInstance.get(
    `/items/d0a76a19-68ca-4d98-8afa-ddeadd3cf516`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
