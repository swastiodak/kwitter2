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
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name1 = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        nameWithTag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'> </h4>";
                        messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
                        likeButton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = nameWithTag + messageWithTag + likeButton + spanWithTag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id){
console.log("like clicked");
buttonId=message_id;
likes=document.getElementById(buttonId).value;
updatedLikes=Number(likes)+1;
console.log("updatedLikes");
firebase.database().ref(room_name).child(message_id).update({
      like:updatedLikes
});
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location = "kwitter.html";
}

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value = "";

}