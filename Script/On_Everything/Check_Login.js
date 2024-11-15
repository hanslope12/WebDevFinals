const check = sessionStorage.getItem("LoggedIn");
if(check == null){
    var Login = false;
        sessionStorage.setItem("Loggedin",Login);
    var adminUser = "CSELEC03";
    var adminPass = "webprog";
    sessionStorage.setItem(adminUser, adminPass);
    window.location.href ="Login.html";
}   
if(check == false){
    window.location.href ="Login.html";
}
