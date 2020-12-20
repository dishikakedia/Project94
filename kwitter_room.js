// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDoDBeWzuTU7I4BKosYE_onFemUHMTXBHM",
    authDomain: "project93-a209c.firebaseapp.com",
    databaseURL: "https://project93-a209c-default-rtdb.firebaseio.com",
    projectId: "project93-a209c",
    storageBucket: "project93-a209c.appspot.com",
    messagingSenderId: "885718918779",
    appId: "1:885718918779:web:1d9a8fb024291d9367a4de",
    measurementId: "G-3PFV6H9KXE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}