import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mywallet.up.railway.app/api/v1",
  timeout: 1000,
  // headers: {
  //   // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzM2FiMTY4Yy02NjdjLTQzNGYtYjdiNS02OTU3NmFhZjVlM2IiLCJpYXQiOjE3NTY3MTY5NTYsImV4cCI6MTc1OTMwODk1Nn0.ljscm9rJ5Q87-RCfT76Idn2-zHL__AlqgUhRaY3aUxo`,
  // },
});

export default axiosInstance;
