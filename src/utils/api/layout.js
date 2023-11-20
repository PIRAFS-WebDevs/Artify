import api from "../axios";

// save tag into database
export const saveLayout = async (data) => {
  try {
    const res = await api.post("/admin/layout/create-layout", data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
