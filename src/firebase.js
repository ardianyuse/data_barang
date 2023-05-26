// Import the functions you need from the SDKs you need
import firebase,{initializeApp} from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK2nZ3k03SGXQJChBmiUXVWeZoMW54rcI",
  authDomain: "data-barang-96d8a.firebaseapp.com",
  databaseURL: "https://data-barang-96d8a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-barang-96d8a",
  storageBucket: "data-barang-96d8a.appspot.com",
  messagingSenderId: "282048580872",
  appId: "1:282048580872:web:2e8a5ffc40321f7c3630bd"
};

const firebaseku = initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
export default firebaseku;