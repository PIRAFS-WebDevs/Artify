import { instance } from "../axios";

// get all the recommendation from db
export const getAllRecommendation = async () => {
  try {
    const response = await instance.get("/recommended");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// post a recommended from db
export const postRecommended = async (data) => {
  try {
    const response = await instance.post("/recommended", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
