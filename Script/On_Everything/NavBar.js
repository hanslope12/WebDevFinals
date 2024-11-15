
function navBarLoad(){
  var navBar = document.getElementById("navbar");
  var newElement = document.createElement('div');
  var currentUser = sessionStorage.getItem('currentUser')
  if(indexOrProd == true)
  {
    newElement.innerHTML =
    `
    <nav class="navbar navbar-expand-sm navbar-dark bg-color">
    <a class="navbar-brand" href="Index.html" onclick="goHome()">Icon here</a>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <button class="bttn" type="button" onclick="goHome()">Home <span class="sr-only">(current)</span></a></button>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <a data-toggle="modal" data-target="#searchModal" id="search-button">
              <img src = "././Img/svg/search.png" class="nav-buttons" alt="My Happy SVG"/>
        </a>
        <a data-toggle="modal" data-target="#cartModal" id="cart-button">
          <img src = "././Img/svg/cart.png" class="nav-buttons" alt="My Happy SVG"/>
        </a>
      </form>
      <div id="user-display">${currentUser}</div>
      <button class="bttn" type="button" id="log-out" onclick="logout()">
            Log out
          </button>
    </div>
  </nav>
    `
  }
  else{
    newElement.innerHTML =
    `
    
    <nav class="navbar navbar-expand-sm navbar-dark bg-color">
    <a class="navbar-brand" href="Index.html" onclick="goHome()">Icon here</a>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <button class="bttn" type="button" onclick="goHome()">Home <span class="sr-only">(current)</span></a></button>
            </li>
        </ul>
      <div id="user-display">${currentUser}</div>
      <button class="bttn" type="button" id="log-out" onclick="logout()">
            Log out
          </button>
    </div>
  </nav>
    `
    
  }
  navBar.append(newElement)
}

function goHome(){
  sessionStorage.removeItem('searchList')
  window.location.href = "Index.html"
}

function search_product() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  var itemList = JSON.parse(localStorage.getItem('itemList'))
  var searchList = []
  itemList.forEach(item => {
   if(item.itemName.toLowerCase().includes(input.toLowerCase()))
   {
    searchList.push(item)
   }
  });
  sessionStorage.setItem('searchList', JSON.stringify(searchList))
  window.location.href = "Index.html"
}

function logout(){
  sessionStorage.clear();
  window.location.href = "Login.html"
  var adminUser = "CSELEC03";
  var adminPass = "webprog";
  sessionStorage.setItem(adminUser, adminPass);
}