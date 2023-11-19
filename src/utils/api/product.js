import api from "../axios";

// save product into database
export const saveProduct = async (data) => {
  try {
    const res = await api.post("/admin/product/create-product", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
