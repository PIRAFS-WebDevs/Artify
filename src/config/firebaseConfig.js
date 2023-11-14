// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
// };

// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
// export default app;

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBW31wKtWQjE0TxQHC6hPk1-GjQfuzwkoQ",
  authDomain: "abu-taher-portfolio.firebaseapp.com",
  projectId: "abu-taher-portfolio",
  storageBucket: "abu-taher-portfolio.appspot.com",
  messagingSenderId: "925281250133",
  appId: "1:925281250133:web:2eddacabacd853a1d41ddc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
