sessionStorage.removeItem("CheckOutData")
var total = 0;
var count = 0;
var indexOrProd = false;
function loadCart()
{
  cart = document.getElementById("cart");
  cart.innerHTML = ""
  var cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
  cartItems.forEach(item => {
        var newElement = document.createElement('div');
            newElement.classList.add('items');
            newElement.classList.add('another-class');
            newElement.innerHTML =
            `
              <p class="item-price">${item.amount}</p>
              <img class="item-img" src="${item.itemImage}" alt="Card image cap">
              <h5 class="card-title item-name">${item.itemName}</h5>
                <p class="item-price">${item.itemPrice}</p>
            `
            cart.append(newElement)
            var finalPrice = item.itemPrice.replace('Php ','')
               total += finalPrice * item.amount;
            total += parseInt(finalPrice);
            count += item.amount;
    })
    var totalDisplay = document.createElement('div');
    totalDisplay.setAttribute("id", "Total");
    totalDisplay.innerHTML = 
    `
    <p>${count} items on the cart</p>
    <p>Total: PHP ${total}</p>
    `
    cart.append(totalDisplay)
}

function onQuit(){
  window.location.href  = "Index.html"
}

function onSubmit(){
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const contact = document.getElementById('contact-number').value;
  const shipping = document.getElementById('shipping-address').value;

  if(firstName && lastName && contact && shipping != null)
  {
    checkOut = {firstName, lastName,contact, shipping}
    checkOutData = sessionStorage.setItem("CheckOutData",JSON.stringify(checkOut))
    window.location.href = "Order_Confirm.html"
  }
  else 
  {
    alert("Pls fill in all the fields!!")
  }
}
