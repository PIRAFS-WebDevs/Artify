import api from "../axios";

// save user into database
export const saveUser = async (data) => {
  try {
    const res = await api.post("/signup", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = async (data) => {
  try {
    const res = await api.post("/user/cart", data);
    console.log(res);

    return res;
  } catch (error) {
    console.error(error);
  }
};
