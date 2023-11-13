"use server";
import { cookies } from "next/headers";
/* export function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
} */

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

  let done = cookieStore.set("cart", newData);

  console.log("🚀 ~ file: AddToCart.js:10 ~ AddToCart ~ done:", done);
};
