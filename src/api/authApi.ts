import axios from "./axiosInstance";

const BASE_URL = "http://localhost:5000/api/auth";

export const registerUser = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/register`, data);
  return response.data;
};

export const loginUser = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data;
};

