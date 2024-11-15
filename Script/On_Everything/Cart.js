var cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
function calculateTotal()
{
    if(cartItems == null)
    {
      sessionStorage.setItem('cartItems', '[]')
      cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
    }
  cart = document.getElementById("cart");
  cart.innerHTML = ""
  if (cartItems != null){
    cartItems.forEach(item => {
      var newElement = document.createElement('div');
          newElement.setAttribute("id","item");
          newElement.classList.add('items-div');
          newElement.classList.add('another-class');
          newElement.innerHTML =
          `
          <div class="card p-2 m-2" style="width: 18rem;">
            <img class="card-img-top item-img" src="${item.itemImage}" alt="Card image cap">
            <div class="card-body">
            <button class="display-name btn-link wrap product-link"><h5 class="btn-link card-title item-name">${item.itemName}</h5></button>
              <p class="card-text item-desc">${item.itemDesc}</p>
              <p class="card-text item-price">${item.itemPrice}</p>
              <p class="card-text item-price">${item.amount}</p>
            </div>
            <input class="select-item" type="checkbox">
          </div>
          `
          cart.append(newElement)
  })
  }
    document.getElementById('delete-checked').addEventListener('click', deleteCartItems)
}

function selectAllItems(){
  var selectAllCheckbox = document.getElementById('select-all')
  var checkboxesList = document.getElementsByClassName('select-item')

  if(selectAllCheckbox.checked){
    for (var i = 0; i < checkboxesList.length; i++) {
      checkboxesList[i].checked = true
    }
  } else {
    for (var i = 0; i < checkboxesList.length; i++) {
      checkboxesList[i].checked = false
    }
  }
}

function deleteCartItems(){
    var isConfirmed = confirm("ARE YOU SURE?")

    var selectAllCheckbox = document.getElementById('select-all')
    var checkboxes = document.getElementsByClassName('select-item')
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
    console.log(isConfirmed)
    if(isConfirmed == true){
      //delete
      for(var i = checkboxes.length-1; i >= 0 ; i--) {
        if(checkboxes[i].checked){
          //delete
          checkboxes[i].parentElement.remove()
          cartItems.splice(i,1)
        }
        sessionStorage.removeItem('cartItems')
        selectAllCheckbox.checked = false;
      }
      sessionStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
    location.reload();
  }

  function redirect(){
    window.location.href = 'Order_Form.html'
  }

  function addToCart(event)
        {
            var button = event.target;
            var parentCon = button.parentElement.parentElement;
            var itemName = parentCon.getElementsByClassName("item-name")[0].innerHTML; 
            var itemPrice = parentCon.getElementsByClassName("item-price")[0].innerHTML;
            var itemDesc = parentCon.getElementsByClassName("item-desc")[0].innerHTML;
            var itemImage = parentCon.getElementsByClassName("item-img")[0].getAttribute("src");
            var itemFound = cartItems.find(item => item.itemName === itemName);

            if(!itemFound)
                {
                  cartItems.push({itemImage, itemName, itemPrice, itemDesc, amount:1});
                }
            else
                {
                    itemFound.amount ++;
                }

            var addListener = document.getElementsByClassName('item-amount')
            for (var i = 0; i < addListener.length; i++) 
            {
                addListener[i].addEventListener('onchange',calculateTotal);
            }

          
            sessionStorage.setItem('cartItems',JSON.stringify(cartItems))
            calculateTotal()
      }