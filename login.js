import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn2qvpJWxvhX5odYL_V4BpbTbhuLoe0Wk",
  authDomain: "hackkare-login.firebaseapp.com",
  projectId: "hackkare-login",
  storageBucket: "hackkare-login.appspot.com",
  messagingSenderId: "871908313949",
  appId: "1:871908313949:web:3abe5a609a0f1e172d36b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById('loginbtn').addEventListener('click', async function (event) {
  event.preventDefault();

  const email = document.getElementById('signinemail').value;
  const password = document.getElementById('signinpass').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // ✅ Redirect immediately after successful login (No Firestore check)
    window.location.href = "http://localhost:3000/";

  } catch (error) {
    alert("Login failed: " + error.message);
  }
});

