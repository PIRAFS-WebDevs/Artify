import api from "../axios";

// save user into database
export const registerUser = async (data) => {
  try {
    const res = await api.post("/api/v1/auth/signup", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// save user into database
export const loginUser = async (data) => {
  try {
    const res = await api.post("/api/v1/auth/login", data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
