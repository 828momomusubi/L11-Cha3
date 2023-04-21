import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw1YzFtTneRmG_mqrPq_ckMvOjWuP3rYY",
  authDomain: "vite-project-9cd37.firebaseapp.com",
  projectId: "vite-project-9cd37",
  storageBucket: "vite-project-9cd37.appspot.com",
  messagingSenderId: "796003603342",
  appId: "1:796003603342:web:1067ab6f30915b5fc00adf"
};
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");
