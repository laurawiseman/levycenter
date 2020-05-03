var firebaseConfig = {
    apiKey: "AIzaSyAryiWErv8wL17cjYSEgqk7zd37GjnSTrw",
    authDomain: "levy-senior-center.firebaseapp.com",
    databaseURL: "https://levy-senior-center.firebaseio.com",
    projectId: "levy-senior-center",
    storageBucket: "levy-senior-center.appspot.com",
    messagingSenderId: "867822639924",
    appId: "1:867822639924:web:8114b315691c83f698a361",
    measurementId: "G-8FFED5PB2G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const dbRef = firebase.database().ref();
 
  const usersRef = dbRef.child('masterSheet');
  const userListUI = document.getElementById("users");
   
  usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user[0];
    userListUI.append($li);
   let $li1 = document.createElement("li");
    $li1.innerHTML = user[1];
    userListUI.append($li1);
   let $li2 = document.createElement("li");
    $li2.innerHTML = user[2];
    userListUI.append($li2);
  });
  