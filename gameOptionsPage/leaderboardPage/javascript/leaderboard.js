const HTML_OUTPUT = document.getElementById("databaseOutput");
function displayUsers() {
    GLOBAL_User = JSON.parse(localStorage.getItem("GLOBAL_User"))
    let top5 = firebase.database().ref('/geodash/Users/highscoreData/').set('value')
    console.log("message: " + top5)
    HTML_OUTPUT.innerHTML = top5;
}