var firebaseConfig = {
  apiKey: "AIzaSyCGTWBHIcl37EumiPvdOCcy4HkoXKcnod4",
  authDomain: "ashter-f8728.firebaseapp.com",
  databaseURL: "https://ashter-f8728-default-rtdb.firebaseio.com",
  projectId: "ashter-f8728",
  storageBucket: "ashter-f8728.appspot.com",
  messagingSenderId: "948683896669",
  appId: "1:948683896669:web:6ffa74c2352b997e869ab4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  username = document.getElementById("user_name").value;
  localStorage.setItem("username", username);
  window.location = "kwitter_room.html";
}