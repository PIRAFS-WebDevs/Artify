import { instance } from "../axios";

// get all users
export const getUsers = async () => {
  try {
    const res = await instance.get("/users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// remove user by id
export const removeUser = async (id) => {
  try {
    const res = await instance.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// save user in db
export const saveUser = async (data) => {
  try {
    const response = await instance.post("/users", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update user
export const updateUser = async (data) => {
  try {
    const response = await instance.patch(`/users`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get user by email
export const getUserByEmail = async (email) => {
  try {
    if (email) {
      const response = await instance.get(`/users/${email}`);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

// change user role
export const changeUserRole = async (data) => {
  try {
    const response = await instance.patch(`/users/change-role`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
