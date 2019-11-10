// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFEIc_Po4HPQ7mOg1SSL_lg56mJw0qAcE",
    authDomain: "campus-ambassador-b3c7a.firebaseapp.com",
    databaseURL: "https://campus-ambassador-b3c7a.firebaseio.com",
    projectId: "campus-ambassador-b3c7a",
    storageBucket: "campus-ambassador-b3c7a.appspot.com",
    messagingSenderId: "714049994844",
    appId: "1:714049994844:web:6a8c6363605c9b4bfc2699",
    measurementId: "G-6JS999HH5P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {
    firebase.auth.signInWithRedirect(provider);
    firebase.auth.getRedirectResult().then((result) => {
        if (result.credential) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(user); // testing
        }
        // TODO : redirect to refral page
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email; // signIn email used
        var cred = error.credential; // credential used to verify
    });
}

function googleSignOut() {
    firebase.auth.signOut()
    .then(() => {
        console.log("SignOut successful")
    }).catch((error) => {
        console.log(error);
    });
}

getElementById("authIn").addEventListner("click", googleSignIn);
getElementById("authOut").addEventListner("click", googleSignOut);
