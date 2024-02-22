import { instance } from "../axios";

// save category in db
export const saveCategory = async (data) => {
  try {
    const response = await instance.post("/categories", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update category data
export const updateCategory = async ({ id, data }) => {
  try {
    const response = await instance.patch(`/categories/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get all the categories from db
export const getCategories = async () => {
  try {
    const response = await instance.get("/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get category by id
export const getCategoryById = async (id) => {
  try {
    const response = await instance.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// delete category by id
export const deleteCategory = async (id) => {
  try {
    const response = await instance.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
