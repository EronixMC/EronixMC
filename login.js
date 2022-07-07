const firebaseConfig = {
    apiKey: "AIzaSyBexyNPogru8Jc7sq4FoZBrFEckPrmBS8c",
    authDomain: "eronixmc.firebaseapp.com",
    databaseURL: "https://eronixmc-default-rtdb.firebaseio.com",
    projectId: "eronixmc",
    storageBucket: "eronixmc.appspot.com",
    messagingSenderId: "469680302705",
    appId: "1:469680302705:web:b2475a19ba090001e109d0",
    measurementId: "G-6Z685TD6MN"
};
firebase.initializeApp(firebaseConfig);

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault()
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("./index.html");
    }
})