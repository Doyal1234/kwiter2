const firebaseConfig = {
apiKey: "AIzaSyCVnDXuwoDwAzBouAprmWAm1kvRy3_IgQk",
authDomain: "kwitter-c93-project.firebaseapp.com",
databaseURL: "https://kwitter-c93-project-default-rtdb.firebaseio.com",
projectId: "kwitter-c93-project",
storageBucket: "kwitter-c93-project.appspot.com",
messagingSenderId: "419595676669",
appId: "1:419595676669:web:a67c6b0618ecf0c8fd4794"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";
function add_room() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
Purpose:"We are going to add the room"
});
localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    
    //End code
    });});}
    getData();