import api from "../axios";

// save user into database
export const saveUser = async (data) => {
  try {
    const res = await api.post("/api/v1/auth/signup", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = async (data) => {
  try {
    const res = await api.post("/api/v1/auth/user/cart", data);
    console.log(res);

    return res;
  } catch (error) {
    console.error(error);
  }
};
