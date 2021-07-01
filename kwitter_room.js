
 // Your web app's Firebase configuration
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick=' redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row; 

      });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   
    firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"

    });
       
   localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}

     function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";

}
 
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

