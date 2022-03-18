
var firebaseConfig = {
    apiKey: "AIzaSyDPi7quElZ7ArTUx63dEX0ln6hLAF_bSos",
    authDomain: "let-s-chat-app-6d1ed.firebaseapp.com",
    projectId: "let-s-chat-app-6d1ed",
    storageBucket: "let-s-chat-app-6d1ed.appspot.com",
    messagingSenderId: "355191069393",
    appId: "1:355191069393:web:d2e12998dc437e51c103f0"
  };
  
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    function addUser() {

          user_name = document.getElementById(:"user_name").nodeValue;

          localStorage.setItem("user_name", user_name);

            window.location = "kwitter_room.html";
    }

    });});}
getData();
