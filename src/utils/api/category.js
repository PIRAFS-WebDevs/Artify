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

// save category into database
export const getCategory = async () => {
  try {
    const res = await api.get("/admin/category/all-category");
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error(error.message);
  }
};
