const firebaseConfig = {
    apiKey: "AIzaSyCc2NvgA2XpP5ayhQI2z3lFxb8oW9K-uYY",
    authDomain: "swasti-s-agent-dsfx.firebaseapp.com",
    databaseURL: "https://swasti-s-agent-dsfx-default-rtdb.firebaseio.com",
    projectId: "swasti-s-agent-dsfx",
    storageBucket: "swasti-s-agent-dsfx.appspot.com",
    messagingSenderId: "621146481712",
    appId: "1:621146481712:web:bc3685f4a42145aa4f79f5",
    measurementId: "G-SJM2N9Y12X"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}