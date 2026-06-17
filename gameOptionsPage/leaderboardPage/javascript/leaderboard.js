const HTML_OUTPUT = document.getElementById("databaseOutput");
function displayUsers() {
    GLOBAL_User = JSON.parse(localStorage.getItem("GLOBAL_User"));
    firebase.database().ref('/geodash/Users/highscoreData/').orderByValue().on('value', sortData, fb_error);
}
function sortData(snapshot) {
    console.log(snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val()
}