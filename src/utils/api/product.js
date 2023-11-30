import toast from "react-hot-toast";
import api from "../axios";

// save product into database
export const saveProduct = async (data) => {
  console.log("data:", data);
  try {
    let formData = new FormData();

    // Append text data
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        // Append each image file
        value.forEach((image, index) => {
          formData.append(`images`, image);
        });
      } else if (key === "tags") {
        value.forEach((tag, index) => {
          formData.append(`tags`, tag);
        });
      } else if (key === "categories") {
        value.forEach((category, index) => {
          formData.append(`categories`, category);
        });
      } else {
        formData.append(key, value);
      }
    });
    console.log("formData: ", formData);
    const res = await api.post("/admin/product/create-product", formData);
    console.log("res:", res);
    if (res.data.success) {
      toast.success("product was successfully upload");
    }
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const updateProduct = async (data, id) => {
  try {
    let formData = { ...data };
    let flatTagsArray = [];
    let flatCategoriesArray = [];

    formData.tags.forEach((item) => {
      if (Array.isArray(item)) {
        flatTagsArray.push(...item);
      } else {
        flatTagsArray.push(item);
      }
    });
    formData.categories.forEach((item) => {
      if (Array.isArray(item)) {
        flatCategoriesArray.push(...item);
      } else {
        flatCategoriesArray.push(item);
      }
    });

    formData.tags = flatTagsArray;
    formData.categories = flatCategoriesArray;

    const res = await api.patch(
      `/admin/product/product-update/${id}`,
      formData
    );

    console.log(res);

    if (res.data.success) {
      toast.success("Product was successfully updated");
    }

    return res;
  } catch (error) {
    console.error(error.message);
  }
};

/* export const updateProduct = async (data, id) => {
  console.log("data:", data);
  try {
    let formData = { ...data };
    formData?.tags.reduce((flatArray, item) => {
    if (Array.isArray(item)) {
      flatArray.push(...item);
    } else {
      flatArray.push(item);
    }
    console.log(formData);

    // Append text data
    // Object.entries(data).forEach(([key, value]) => {
    //   if (key === "images") {
    //     // Append each image file
    //     value.forEach((image, index) => {
    //       if (image !== null && image !== undefined) {
    //         formData.append(`images[${index}]`, image);
    //       }
    //     });
    //   } else if (key === "tags") {
    //     // Check if it's an array and append the first item
    //     if (Array.isArray(value) && value.length > 0) {
    //       formData.append(`tags`, value[0]);
    //     } else {
    //       formData.append(`tags`, value);
    //     }
    //   } else if (key === "categories") {
    //     // Check if it's an array and append the first item
    //     if (Array.isArray(value) && value.length > 0) {
    //       formData.append(`categories`, value[0]);
    //     } else {
    //       formData.append(`categories`, value);
    //     }
    //   } else {
    //     formData.append(key, value);
    //   }
    // });

    console.log("updated ", formData);

    const res = await api.patch(
      `/admin/product/product-update/${id}`,
      formData
    );
    console.log(res);

    if (res.data.success) {
      toast.success("product was successfully updated");
    }

    return res;
   }}catch (error) {
    console.error(error.message);
  }
} */

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
    return res.data.singleData;
  } catch (error) {
    console.error(error.message);
  }
};
export const delAnyItem = async (id, apis) => {
  console.log({ id: id, apis: apis });
  try {
    let res = await api.delete(
      `${process.env.NEXT_PUBLIC_BaseUrl}${apis}${id}`
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
