const HTML_OUTPUT = document.getElementById("databaseOutput");
let authenticationListener;
let GLOBAL_User;    
let verify_Login

async function fb_handleUser(_User) {
    
  if (_User) {
HTML_OUTPUT.innerHTML = "Please wait for us to log you in" + "<br>" + "This process should not take long."
  GLOBAL_User = _User;  
    await firebase.database().ref('jetpackman/Users/' + GLOBAL_User.uid).update(
            {
                name: GLOBAL_User.displayName,
                email: GLOBAL_User.email
            }
    );
    verify_Login = "verified_the_login"
    console.log("The User has officially logged in");
    HTML_OUTPUT.innerHTML = "You are logged in successfully!" + "<br>" + "Enjoy playing these games " + GLOBAL_User.displayName;
    console.log(GLOBAL_User);
    let UserID = GLOBAL_User.uid;
  } else {
    console.log("The User is not logged in " + "<br>" + " The user must verify the login");
     HTML_OUTPUT.innerHTML = "You are not logged in" + "<br>" + "Please login" + " to verify";
     loginWithGoogle();
  }
}

function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_User = result.user;
        console.log("User has logged in");
        console.log(GLOBAL_User);
    });
}