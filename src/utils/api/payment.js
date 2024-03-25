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

// get all payment
export const getAllPayment = async () => {
  try {
    const response = await instance.get(`/payment`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get payment by email
export const getPaymentByEmail = async (email) => {
  try {
    if (email) {
      const response = await instance.get(`/payment/${email}`);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
