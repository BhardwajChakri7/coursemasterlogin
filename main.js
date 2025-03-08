import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
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

const signupbutton = document.getElementById('signupbtn');
signupbutton.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById('emailtextbox').value;
  const password = document.getElementById('passwordtextbox').value;
  const hospitalname = document.getElementById('hospitalnametextbox').value;
  const hospitaladdress = document.getElementById('hospitaladresstextbox').value;
  createUserWithEmailAndPassword(auth, email, password,hospitalname,hospitaladdress)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location.href="index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})
