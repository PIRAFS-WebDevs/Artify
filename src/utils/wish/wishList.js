"use server";

import { cookies } from "next/headers";

export const addToWishList = async (data) => {
  const cookieStore = cookies();
  const existingCartItems = cookieStore.get("wishList");

  let finalData = [];

  if (existingCartItems) {
    const checkCookie = JSON.parse(existingCartItems.value);
    finalData = [...checkCookie];
  }

  finalData.push(data);

  const newData = JSON.stringify(finalData);

  cookieStore.set("wishList", newData);
};

export const getWishlist = async () => {
  const cookieStore = cookies();
  let finalData = [];

  const existingCartItems = cookieStore.get("wishList");

  if (existingCartItems) {
    const checkCookie = JSON.parse(existingCartItems.value);
    finalData = [...checkCookie];
  }

  return finalData;
};

export const deleteWishList = async (_id) => {
  const cookieStore = cookies();
  const existingCartItems = cookieStore.get("wishList");

  if (existingCartItems) {
    const parsedCartItems = JSON.parse(existingCartItems.value);
    const updatedCartItems = parsedCartItems.filter((item) => item !== _id);

    cookieStore.delete("wishList");

    cookieStore.set("wishList", JSON.stringify(updatedCartItems), {
      path: "/",
    });
  }
};
