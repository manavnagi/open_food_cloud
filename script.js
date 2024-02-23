// intialising: 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
        import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDG6KzHJX1Q8cGQII7eFfN8xY5tibu5X28",
            authDomain: "open-food-cloud.firebaseapp.com",
            projectId: "open-food-cloud",
            storageBucket: "open-food-cloud.appspot.com",
            messagingSenderId: "905128518957",
            appId: "1:905128518957:web:f92a44b234013b9ee29fa4",
        };

        // Initialize Firebase
        const firebaseApp = initializeApp(firebaseConfig);
        const auth = getAuth(firebaseApp);
        const firestore = getFirestore(firebaseApp);




        // Your Firestore integration code goes here
        // Example: Adding data to Firestore
        const addDataToFirestore = () => {
          const data = {
              name: "John",
              age: 30,
              email: "john@example.com"
          };

          firestore.collection("users").add(data)
              .then((docRef) => {
                  console.log("Document written with ID: ", docRef.id);
              })
              .catch((error) => {
                  console.error("Error adding document: ", error);
              });
      };
      
// Login Form Handling
const login = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get email and password values from the form
    const email = login.email.value;
    const password = login.password.value;
    
    // Sign in the user with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully, redirect to dashboard
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            // Handle login errors, e.g., display error message to the user
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
            // Display error message to the user (e.g., in a <div> element)
            // Replace 'error-message' with the ID of your error message container
            document.getElementById('error-message').innerText = errorMessage;
        });
});

// Registration Form Handling
const registration = document.getElementById('registration-form');

registration.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get email and password values from the form
    const email = registration.email.value;
    const password = registration.password.value;
    
    // Create a new user account with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully, redirect to dashboard
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            // Handle registration errors, e.g., display error message to the user
            const errorMessage = error.message;
            console.error('Registration error:', errorMessage);
            // Display error message to the user (e.g., in a <div> element)
            // Replace 'error-message' with the ID of your error message container
            document.getElementById('error-message').innerText = errorMessage;
        });
});



// Firebase Configuration (Removed)

// Login and Registration Form Handling
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get email and password values from the form
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  // Call a function to handle login process using Firebase Authentication
  loginUser(email, password);
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get email and password values from the form
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;
  // Call a function to handle registration process using Firebase Authentication
  registerUser(email, password);
});

// Function to handle login process using Firebase Authentication
function loginUser(email, password) {
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Signed in successfully, redirect to the dashboard
          window.location.href = "dashboard.html";
      })
      .catch((error) => {
          // Handle login errors, e.g., display error message to the user
          const errorMessage = error.message;
          console.error('Login error:', errorMessage);
      });
}

// Function to handle registration process using Firebase Authentication
function registerUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User registered successfully, redirect to the dashboard
          window.location.href = "dashboard.html";
      })
      .catch((error) => {
          // Handle registration errors, e.g., display error message to the user
          const errorMessage = error.message;
          console.error('Registration error:', errorMessage);
      });
}
// Firebase Configuration (Removed)

// Login and Registration Form Handling
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get email and password values from the form
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  // Call a function to handle login process using Firebase Authentication
  loginUser(email, password);
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get email and password values from the form
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;
  // Call a function to handle registration process using Firebase Authentication
  registerUser(email, password);
});

// Function to handle login process using Firebase Authentication
function loginUser(email, password) {
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Signed in successfully, redirect to the dashboard
          window.location.href = "dashboard.html";
      })
      .catch((error) => {
          // Handle login errors, e.g., display error message to the user
          const errorMessage = error.message;
          console.error('Login error:', errorMessage);
      });
}

// Function to handle registration process using Firebase Authentication
function registerUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User registered successfully, redirect to the dashboard
          window.location.href = "dashboard.html";
      })
      .catch((error) => {
          // Handle registration errors, e.g., display error message to the user
          const errorMessage = error.message;
          console.error('Registration error:', errorMessage);
      });
}
