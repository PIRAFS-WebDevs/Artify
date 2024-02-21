import api, { instance } from "../axios";

// save category into database
export const saveCategory = async (data) => {
  try {
    const res = await api.post("/admin/category/create-category", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
export const updateCategory = async (data, id) => {
  try {
    const res = await api.patch(`/admin/category/category-update/${id}`, data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

// get all the categories from db
export const getCategories = async () => {
  try {
    const res = await instance.get("/categories");
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const res = await api.get(`/admin/layout/Single-category/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error.message);
  }
};
