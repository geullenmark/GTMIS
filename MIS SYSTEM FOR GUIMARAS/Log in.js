// Include Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"; // Corrected import statement
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeSy9qMibAAYCZg5cipJ8097qeh3vwF08",
  authDomain: "testingapp-589a1.firebaseapp.com",
  projectId: "testingapp-589a1",
  storageBucket: "testingapp-589a1.appspot.com",
  messagingSenderId: "920622301670",
  appId: "1:920622301670:web:8937030299600fede51627",
  measurementId: "G-ZJP7HRFH98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app); // Add authentication

// Add event listener for form submission
document.getElementById("login-form").addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get user input
  const email = document.getElementById("username").value; // Update ID to "username"
  const password = document.getElementById("password").value;
  
  // Hardcoded admin credentials
  const adminEmail = "pedo.admin@gtmis.com";
  const adminPassword = "pedoguimaras_pass24!";
  
  // Check if the entered credentials match the admin credentials
  if (email === adminEmail && password === adminPassword) {
    // Sign in user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user.uid);
        alert("Login Successful!");

        // Redirect to homepage after successful login
        window.location.href = "Dashboard.html";
      })
      .catch((error) => {
        // Error handling
        console.error('Error signing in:', error);
        if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
          alert("Login Failed! Incorrect email or password.");
        } else {
          alert("Login Failed!");
        }
      });
  } else {
    // If entered credentials do not match admin credentials
    alert("Login Failed! Incorrect email or password.");
  }
});
