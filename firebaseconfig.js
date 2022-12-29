import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjzLbD5jpGBE42ju5m4E62b68Pyfx_j-c",
  authDomain: "dev-united-l.firebaseapp.com",
  projectId: "dev-united-l",
  storageBucket: "dev-united-l.appspot.com",
  messagingSenderId: "862718742004",
  appId: "1:862718742004:web:6e9612012385b5405ebda1",
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
