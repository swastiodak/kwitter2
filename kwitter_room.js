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
var userName= document.getElementById("username").value;
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome " + username + " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("room_name = "+Room_names);
row="<div class='roomname' id="+Room_names+" onclick='redirectToRoom_name(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();
function logout(){
    localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "kwitter.html";
}

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}
function redirectToRoom_name(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}