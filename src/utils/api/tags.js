import api from "../axios";

// save tag into database
export const saveTag = async (data) => {
  try {
    const res = await api.post("/admin/tags/create-tags", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
export const updateTag = async (data, id) => {
  try {
    const res = await api.patch(`/admin/tags/tags-update/${id}`, data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

// get all tags
export const getTags = async () => {
  try {
    const res = await api.get("/admin/tags/all-tags");
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const getTagById = async (id) => {
  try {
    const res = await api.get(`/admin/layout/Single-tag/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error.message);
  }
};
