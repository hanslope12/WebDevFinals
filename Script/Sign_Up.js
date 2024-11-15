var indexOrProd = false;
const check = sessionStorage.getItem("LoggedIn");
if(check == null){
    var Login = false;
        sessionStorage.setItem("Loggedin",Login);
    var adminUser = "CSELEC03";
    var adminPass = "webprog";
    sessionStorage.setItem(adminUser, adminPass);
}   

if(check == true)
    {
        alert("User is already logged in");
        window.location.href = "Index.html";
    }
function addListeners(){
    const input = document.getElementById('submit');
    input.addEventListener('click', onSubmit);
}
function onSubmit(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const check = sessionStorage.getItem(username);
    if(check == null){
        sessionStorage.setItem(username, password); 
    }
    else
    {
        alert("Username already exists")
    }
   
}
