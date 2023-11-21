import api from "../axios";

// save user into database
export const saveUser = async (data) => {
  try {
    const res = await api.post("/signup", data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// get all users
export const getUser = async () => {
  try {
    const res = await api.get("/admin/user/all-user");
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const setUserRole = async (_id, role) => {
  console.log(_id, role);
  try {
    const res = await api.patch("/admin/user/change-role", { _id, role });
    return res;
  } catch (error) {
    console.error(error);
  }
};

// get user by email
export const getUserByEmail = async (email) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/auth/admin/user/single-user/${email}`,
      { next: { revalidate: 3 } }
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = async (data) => {
  try {
    const res = await api.post("/user/cart", data);

    return res;
  } catch (error) {
    console.error(error);
  }
};
