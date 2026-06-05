function fb_error(error){
console.log("there was an error reading the message");
console.error(error);
}
function fb_authenticate(){
    authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin, fb_error);
}
