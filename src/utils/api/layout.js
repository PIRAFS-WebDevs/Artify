import { instance } from "../axios";

// save Layout in db
export const saveLayout = async (data) => {
  try {
    const response = await instance.post("/layouts", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update Layout data
export const updateLayout = async ({ id, data }) => {
  try {
    const response = await instance.patch(`/layouts/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get all the layouts from db
export const getLayouts = async () => {
  try {
    const response = await instance.get("/layouts");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get Layout by id
export const getLayoutById = async (id) => {
  try {
    const response = await instance.get(`/layouts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// delete Layout by id
export const deleteLayout = async (id) => {
  try {
    const response = await instance.delete(`/layouts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
