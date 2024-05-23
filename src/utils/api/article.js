import { instance } from "../axios";

// get all the blogs from db
export const getAllBlogs = async () => {
  try {
    const response = await instance.get("/blogs");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get a single blog from db
export const getSingleBlog = async (id) => {
  try {
    const response = await instance.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
