var firebaseConfig = {
      apiKey: "AIzaSyA7slrWaIBWoDsi7OcHdizURMJbaiB6rm4",
      authDomain: "kwiter-app-27154.firebaseapp.com",
      databaseURL: "https://kwiter-app-27154-default-rtdb.firebaseio.com",
      projectId: "kwiter-app-27154",
      storageBucket: "kwiter-app-27154.appspot.com",
      messagingSenderId: "535302263016",
      appId: "1:535302263016:web:d650c11dd3941009d3395d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function send()
{

msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
     name:user_name,
    message:msg,
     like:0
});
 
document.getElementById("msg").value = "";
}
 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }
