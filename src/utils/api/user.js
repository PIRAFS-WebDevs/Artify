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
export const getUser = async (text) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BaseUrl}/admin/user/all-user/?text=${text}`,
      {
        cache: "no-cache",
      }
    );
    return res.json();
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
      `${process.env.NEXT_PUBLIC_BaseUrl}/admin/user/single-user/${email}`,
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
export const getFromCart = async (params) => {
  try {
    const res = await api.get(`/user/get-cart/${params}`);

    return res.data.data.item;
  } catch (error) {
    console.error(error);
  }
};
