var total = 0;
var count = 0;
var indexOrProd = false;
function loadOrder()
{
  cart = document.getElementById("cart");
  user = document.getElementById("user")
  var cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
  var userData = JSON.parse(sessionStorage.getItem('CheckOutData'))
  user.innerHTML = 
  `
  
  <p class="card-text item-price">Ship to</p>
  <h5 class="card-title item-name">${userData.firstName} ${userData.lastName}, ${userData.shipping}</h5>
  <p class="card-text item-price">User Contact details</p>
  <h5 class="card-title item-name">${userData.contact}</h5>
  `
  cartItems.forEach(item => {
      var newElement = document.createElement('div');
          newElement.setAttribute("id","item");
          newElement.classList.add('items-div');
          newElement.classList.add('another-class');
          newElement.innerHTML =
          `
            <h5 class="card-title item-name">${item.itemName}</h5>
              <p class="card-text item-price">${item.itemPrice}.</p>
              <p class="card-text item-price">${item.amount}.</p>
            
          `
          cart.append(newElement)

          var finalPrice = item.itemPrice.replace('Php ','')
               total += finalPrice * item.amount;
          total += parseInt(finalPrice);
          count ++;
  })
  var totalDisplay = document.createElement('div');
  totalDisplay.setAttribute("id", "Total");
  totalDisplay.innerHTML = 
  `
  <p>There are ${count} on the cart</p>
  <p>Total: PHP ${total}</p>
  `
  cart.append(totalDisplay)
  sessionStorage.removeItem('cartItems')
}

function onHome(){
  window.location.href = "Index.html"
}