// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7Qc_u_umlt17rqw9y4iiiDucrG9f6WM",
  authDomain: "mis-system-88bc4.firebaseapp.com",
  databaseURL: "https://mis-system-88bc4-default-rtdb.firebaseio.com",
  projectId: "mis-system-88bc4",
  storageBucket: "mis-system-88bc4.appspot.com",
  messagingSenderId: "256563921237",
  appId: "1:256563921237:web:23b983ec6c073946242fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Add event listener for form submission
document.getElementById("registrationForm").addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get user input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const userId = document.getElementById("userId").value;
  
  // Store user registration data in Firebase
  push(ref(db, 'users'), {
    username: username,
    password: password,
    email: email,
    userId: userId
  }).then(() => {
    // Success callback
    alert("Registration Successful!");
    // You can redirect the user to another page after successful registration if needed
  }).catch((error) => {
    // Error callback
    console.error('Error storing registration data:', error);
    alert("Registration Failed!");
  });
});
