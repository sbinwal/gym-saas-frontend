import axios from "./axiosInstance";

export const getAllMembers = () =>
  axios.get("/members/getAllMembers");

export const addMember = (data: any) =>
  axios.post("/members/create", data);

export const createMembership = (data: any) =>
  axios.post("/members/membership/create", data);

export const addPayment = (data: any) =>
  axios.post("/members/addPayment", data);