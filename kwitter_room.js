 // Your web app's Firebase configuration
 var firebaseConfig = { 
  apiKey: "AIzaSyDpTfb4VYMERJ2veoj4BKsPSg6zllBXlL8",
  authDomain: "kwitter-cfe84.firebaseapp.com",
  databaseURL: "https://kwitter-cfe84-default-rtdb.firebaseio.com",
  projectId: "kwitter-cfe84",
  storageBucket: "kwitter-cfe84.appspot.com",
  messagingSenderId: "653244572539",
  appId: "1:653244572539:web:961597b2d80f5e7d1353de"
};
firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("Output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("Output").innerHTML+=row;
      //End code
      });});}
getData(); 

function add_room()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
  console.log(room_name);
  window.location="kwitter_page.html"; 
}

function redirectToRoomName(Name)
{
  localStorage.setItem("room_name", Name);
  window.location= "kwitter_page.html";
  console.log(Name);
}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
} 