const HTML_OUTPUT = document.getElementById("databaseOutput");
let authenticationListener;
let GLOBAL_User;    
let verify_Login

async function handleUser(_User) {
    
  if (_User) {
HTML_OUTPUT.innerHTML = "Please wait for us to log you in" + "<br>" + "This process should not take long."
  GLOBAL_User = _User;  
    await firebase.database().ref('/jetpackman/Users/' + GLOBAL_User.uid).update(
            {
                name: GLOBAL_User.displayName,
                email: GLOBAL_User.email
            }
    );
    verify_Login = "verified_the_login"
    console.log("The User has officially logged in");
    HTML_OUTPUT.innerHTML = "You are logged in successfully!" + "<br>" + "Enjoy playing these games " + GLOBAL_User.displayName;
  } else {
    console.log("The User is not logged in " + "<br>" + "Ther user verify the login");
     HTML_OUTPUT.innerHTML = "You are not logged in" + "<br>" + "Login" + GLOBAL_User.displayName;
  }


}