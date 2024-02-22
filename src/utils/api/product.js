import { instance } from "../axios";

// get all products
export const getProducts = async (text) => {
  try {
    const res = await instance.get(
      text ? `/products?text=${text}` : "/products"
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// remove product by id
export const removeProduct = async (id) => {
  try {
    const res = await instance.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// save product in db
export const saveProduct = async (data) => {
  try {
    const response = await instance.post("/products", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update product
export const updateProduct = async ({ id, data }) => {
  try {
    const response = await instance.patch(`/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get product by id
export const getProductById = async (id) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
