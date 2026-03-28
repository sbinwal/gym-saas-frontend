import axios from "./axiosInstance";

export const getPlans = () =>
  axios.get("/plans/getAllPlans");

export const createPlan = (data: any) =>
  axios.post("/plans/create", data);