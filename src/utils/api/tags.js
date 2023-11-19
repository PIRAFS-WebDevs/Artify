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
