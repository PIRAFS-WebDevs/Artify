"use server";

import { cookies } from "next/headers";

export const AddToCart = async (data) => {
  const cookieStore = cookies();
  const existingCartItems = cookieStore.get("cart");

  let finalData = [];

  if (existingCartItems) {
    const checkCookie = JSON.parse(existingCartItems.value);
    finalData = [...checkCookie];
  }

  finalData.push(data);

  const newData = JSON.stringify(finalData);

  cookieStore.set("cart", newData);
};

export const GetDataCart = async () => {
  const cookieStore = cookies();
  let finalData = [];

  const existingCartItems = cookieStore.get("cart");

  if (existingCartItems) {
    const checkCookie = JSON.parse(existingCartItems.value);
    finalData = [...checkCookie];
  }

  return finalData;
};

export const DeleteDataCart = async (_id) => {
  const cookieStore = cookies();
  const existingCartItems = cookieStore.get("cart");

  if (existingCartItems) {
    const parsedCartItems = JSON.parse(existingCartItems.value);
    const updatedCartItems = parsedCartItems.filter((item) => item.id !== _id);

    cookieStore.delete("cart");

    cookieStore.set("cart", JSON.stringify(updatedCartItems), { path: "/" });
  }
};
