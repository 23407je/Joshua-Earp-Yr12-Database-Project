const HTML_OUTPUT = document.getElementById("databaseOutput");
let geodash_leaderboardData_display = "";
function displayUsers() {
    GLOBAL_User = JSON.parse(localStorage.getItem("GLOBAL_User"));
    firebase.database().ref('/geodash/Users/highscoreData/').orderByValue().on('value', sortGeodashData, fb_error);
    firebase.database().ref('/jetpackman/Users/highscoreData/').orderByValue().on('value', sortJetpackmanData, fb_error);
}
function sortGeodashData(snapshot) {
    let data = snapshot.val()
    const grab_Userdata = Object.entries(data);
    for (let i = 0; i < Math.min(grab_Userdata.length, 5); i++) {
        geodash_leaderboardData_display += grab_Userdata[i][0] + " Highscore: " + grab_Userdata[i][1].User_Highscore + " <br> "
    }
}
function sortJetpackmanData(jetpackmanData) {
    let jetpackman_data = jetpackmanData.val()
    const jetpackman_grab_Userdata = Object.entries(jetpackman_data);
    console.log(jetpackman_grab_Userdata);
    let jetpackman_leaderboardData_display = "";
    for (let i = 0; i < Math.min(jetpackman_grab_Userdata.length, 5); i++) {
        jetpackman_leaderboardData_display += jetpackman_grab_Userdata[i][0] + " Highscore: " + jetpackman_grab_Userdata[i][1].User_Highscore + " <br> "
    }
    HTML_OUTPUT.innerHTML = "<h2>Geodash top 5 highscores:</h2>" + "<br> <br>" + geodash_leaderboardData_display + "<br> <br>" + "<h2>Jetpackman top 5 highscores:</h2>" + "<br> <br>" + jetpackman_leaderboardData_display
>>>>>>> e931366306fc0404e1dfc4f5f0ced60c634a7952
}