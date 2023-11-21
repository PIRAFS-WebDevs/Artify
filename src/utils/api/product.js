import api from "../axios";

// save product into database
export const saveProduct = async (data) => {
  try {
    const res = await api.post("/admin/product/create-product", data);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const getProduct = async () => {
  try {
    const res = await api.get("/admin/product/all-product");
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};
