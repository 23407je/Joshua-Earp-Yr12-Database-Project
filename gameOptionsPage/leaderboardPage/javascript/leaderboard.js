const HTML_OUTPUT = document.getElementById("databaseOutput");
function displayUsers() {
    GLOBAL_User = JSON.parse(localStorage.getItem("GLOBAL_User"));
    firebase.database().ref('/geodash/Users/highscoreData/').orderByValue().on('value', sortData, fb_error);
}
function sortData(snapshot) {
    console.log(snapshot.val())
    let data = snapshot.val()
    console.log(data)
    console.log(JSON.stringify(data));
    const grab_Userdata = Object.entries(data);
    console.log(grab_Userdata);
    for (let i = 0; i < Math.min(grab_Userdata.length, 5); i++) {
         let leaderboardData_name = grab_Userdata[i][0] + " Highscore: " + grab_Userdata[i][1].Highscore
    }
}