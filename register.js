
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiTSkBpVPh3u70RG6vUvkKKC_rW0zPao0",
    authDomain: "renovanew-875f1.firebaseapp.com",
    projectId: "renovanew-875f1",
    storageBucket: "renovanew-875f1.appspot.com",
    messagingSenderId: "190542408769",
    appId: "1:190542408769:web:9c8644ca97cca00b5b2ac0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


//inputs

//submit button

const submit = document.getElementById("submit");
submit.addEventListener("click",function(event){
event.preventDefault()
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating user...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });


})