
// ** ADD CONFIGS HERE **//

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
        // TODO : redirect to referal page
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
