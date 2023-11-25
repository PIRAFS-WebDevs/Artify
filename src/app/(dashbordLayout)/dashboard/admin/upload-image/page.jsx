// "use client";

// import { useState, useEffect } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   deleteObject,
// } from "firebase/storage";
// import { storage } from "@/config/firebaseConfig";

// function generateRandomUid() {
//   const uid = Math.floor(Math.random() * 9000000000) + 1000000000;
//   return uid.toString();
// }

// export default function Home() {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const imagesListRef = ref(storage, "images/");

//   const uploadFiles = async (files) => {
//     setLoading(true);

//     try {
//       const uploadPromises = files.map(async (file) => {
//         const imageRef = ref(
//           storage,
//           `images/${file.name + generateRandomUid()}`
//         );
//         const snapshot = await uploadBytes(imageRef, file);
//         return getDownloadURL(snapshot.ref);
//       });

//       const urls = await Promise.all(uploadPromises);

//       setImageUrls((prev) => [...prev, ...urls]);
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     console.log(files);
//     uploadFiles(Array.from(files));
//   };

//   const deleteImage = async (url) => {
//     const imageRef = ref(storage, url);

//     try {
//       await deleteObject(imageRef);
//       setImageUrls((prev) => prev.filter((image) => image !== url));
//     } catch (error) {
//       console.error("Error deleting image:", error);
//     }
//   };

//   useEffect(() => {
//     listAll(imagesListRef)
//       .then((response) =>
//         Promise.all(response.items.map((item) => getDownloadURL(item)))
//       )
//       .then((urls) => {
//         setLoading(false);
//         setImageUrls(urls);
//       })
//       .catch((error) => {
//         console.error("Error fetching image URLs:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <input type="file" multiple onChange={handleFileChange} />
//       {loading && <p>Loading...</p>}
//       {imageUrls.map((url, i) => (
//         <div key={i}>
//           <img width={200} src={url} alt={`Image ${i}`} />
//           <button onClick={() => deleteImage(url)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }
