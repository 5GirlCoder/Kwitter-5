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
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
Message = message_data['message'];
Likes = message_data['likes'];
Name_with_tag = "<h4>"+Name+"<img class='user_tick' src='tick.png'</h4>";
Message_with_tag = "<h4 class='message_h4'>"+Message+"</h4>";
Like_with_button = "<button onclick='UpdateLike(this.id)' class='btn btn-warning' id="+firebase_message_id+" value="+Likes+">";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:  "+Likes+"</span></button><hr>";

row = Name_with_tag + Message_with_tag + Like_with_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code 
      } });  }); }
getData();   

function send()
{
      MSG = document.getElementById("MSG").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:MSG,
                  likes:0
            }
      );
      document.getElementById("MSG").value = "";
} 

function UpdateLike(message_id)
{
      console.log("Clicked on like button -" + message_id);
      Button_id = message_id;
      Likes = document.getElementById(Button_id).value;
      Updated_Likes = Number(Likes) + 1;
      console.log(Updated_Likes);
      firebase.database().ref(room_name).child(message_id).update({
            
            likes:Updated_Likes
      });
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("index.html");
}