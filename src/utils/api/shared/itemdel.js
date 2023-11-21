import api from "@/utils/axios";
export const delateItem = async (path) => {
  try {
    const res = await api.delete(path);
    return res;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
