import api from "../axios";

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
