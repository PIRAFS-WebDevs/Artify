import api from "../axios";

// save product into database
export const saveProduct = async (data) => {
  try {
    let formData = new FormData();
    console.log(data)
    // Append text data
   Object.entries(data).forEach(([key, value]) => {
      if (key === 'images') {
        console.log("11")
        // Append each image file
        value.forEach((image, index) => {
          formData.append(`images`, image);
          console.log(formData)
        });
      } else {
        console.log(value)
        formData.append(key, value);
      }
    });
    console.log("hello ",formData)
    const res = await api.post("/admin/product/create-product", formData);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

// export const getProducts = async (text) => {
//   try {
//     const res = await fetch(
//       text
//         ? `http://localhost:5000/api/v1/auth/admin/product/all-product/?text=${text}`
//         : "http://localhost:5000/api/v1/auth/admin/product/all-product/",
//       { cache: "no-cache" }
//     );

//     return res.json();
//   } catch (error) {
//     console.error(error.message);
//   }
// };

export const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/auth/product/${id}`, {
      cache: "force-cache",
    });

    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};
