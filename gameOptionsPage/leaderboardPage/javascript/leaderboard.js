const HTML_OUTPUT = document.getElementById("databaseOutput");
function displayUsers() {
    GLOBAL_User = JSON.parse(localStorage.getItem("GLOBAL_User"))
    HTML_OUTPUT.innerHTML = hi;
}