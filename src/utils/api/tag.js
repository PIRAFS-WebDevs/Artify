import { instance } from "../axios";

// save Tag in db
export const saveTag = async (data) => {
  try {
    const response = await instance.post("/tags", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update Tag data
export const updateTag = async ({ id, data }) => {
  try {
    const response = await instance.patch(`/tags/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get all the tags from db
export const getTags = async () => {
  try {
    const response = await instance.get("/tags");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get Tag by id
export const getTagById = async (id) => {
  try {
    const response = await instance.get(`/tags/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// delete Tag by id
export const deleteTag = async (id) => {
  try {
    const response = await instance.delete(`/tags/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
