import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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
const db = getFirestore();

document.getElementById('loginbtn').addEventListener('click', async function(event) {
  event.preventDefault();

  const email = document.getElementById('signinemail').value;
  const password = document.getElementById('signinpass').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (userDoc.exists() && (userDoc.data().role === "faculty" || userDoc.data().role === "student")) {
      window.location.href = "https://99220040811.github.io/learning-management/";
    } else {
      alert("Role not defined. Please contact admin.");
    }
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
