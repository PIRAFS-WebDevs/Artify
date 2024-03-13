import { instance } from "../axios";

// create new payment
export const createPayment = async (data) => {
  try {
    const response = await instance.post("/payment", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
