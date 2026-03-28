import axios from "./axiosInstance";

// Add Payment
export const addPayment = (data: any) =>
  axios.post("/payments/add", data);

// Get All Payments
export const getAllPayments = () =>
  axios.get("/payments");