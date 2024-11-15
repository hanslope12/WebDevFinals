const check = sessionStorage.getItem("LoggedIn");
var indexOrProd = false;
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
    const checkUser = sessionStorage.getItem(username);
    sessionStorage.removeItem("Loggedin",false)
    if(checkUser == password)
    {   
        Login = true;
        checkLogIn = sessionStorage.setItem("LoggedIn",Login)
        currentUser = sessionStorage.setItem("currentUser", username)
        windowlocation.href = "Index.html";
    }
    else
    {
        alert("wrong password")
    }
}
