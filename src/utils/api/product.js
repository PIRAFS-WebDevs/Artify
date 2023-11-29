import api from "../axios";

// save product into database
export const saveProduct = async (data) => {
  try {
    let formData = new FormData();
    console.log(data);
    // Append text data
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        console.log("11");
        // Append each image file
        value.forEach((image, index) => {
          formData.append(`images`, image);
          console.log(formData);
        });
      } else {
        console.log(value);
        formData.append(key, value);
      }
    });
    console.log("hello ", formData);
    const res = await api.post("/admin/product/create-product", formData);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
export const updateProduct = async (data, id) => {
  try {
    let formData = new FormData();
    console.log(data);
    // Append text data
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        console.log("11");
        // Append each image file
        value.forEach((image, index) => {
          formData.append(`images`, image);
          console.log(formData);
        });
      } else {
        console.log(value);
        formData.append(key, value);
      }
    });
    console.log("hello ", formData);
    const res = await api.patch(`/admin/product/product-update/${id}`, formData);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

// export const getProducts = async (text) => {
//   try {
//     const res = await fetch(
//       text
//         ? `${process.env.NEXT_PUBLIC_BaseUrl}/admin/product/all-product/?text=${text}`
//         : `${process.env.NEXT_PUBLIC_BaseUrl}/admin/product/all-product/`,
//       { next: { revalidate: "3600" } }
//     );
//     return res.json();
//   } catch (error) {
//     console.error(error.message);
//   }
// };

export const getProducts = async (text) => {
  try {
    const res = await api.get(
      text
        ? `${process.env.NEXT_PUBLIC_BaseUrl}/admin/product/all-product/?text=${text}`
        : `${process.env.NEXT_PUBLIC_BaseUrl}/admin/product/all-product/`
      // { next: { revalidate: "3600" } }
    );
    // console.log(res.data.products);
    return res.data.products;
  } catch (error) {
    console.error(error.message);
  }
};
export const ProductByid = async (id) => {
  try {
    const res = await api.get(
      `https://waresun-server.vercel.app/api/v1/auth/product/${id}`
      // { next: { revalidate: "3600" } }
    );
    // console.log(res.data.products);
    return res.data.singleData
  } catch (error) {
    console.error(error.message);
  }
};
export const delProducts = async (id) => {
  try {
    const res = await api.delete(`${process.env.NEXT_PUBLIC_BaseUrl}/admin/product/product-delate/${id}`
      // { next: { revalidate: "3600" } }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const getProductById = async (id) => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BaseUrl}/product/${id}`, {
    const res = await fetch(
      `https://waresun-server.vercel.app/api/v1/auth/product/${id}`,
      {
        cache: "force-cache",
      }
    );

    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};
