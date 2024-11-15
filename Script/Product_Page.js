var indexOrProd = true;
function getProduct()
    {
        var getProductData = JSON.parse(sessionStorage.getItem('productDisplay'))
        var getList = JSON.parse(localStorage.getItem('itemList'))
        productPlace = document.getElementById("product");
        var newElement = document.createElement('div');
        newElement.setAttribute("id","item");
        newElement.classList.add('items-div');
        let displayItem = []
        getList.forEach(item => {
          if(item.itemName== getProductData)
          {
           displayItem.push(item)
          }
        });
        if(displayItem.length == 0)
        {
          newElement.innerHTML =
          `
          <div class="images">
            Product not found
          </div>
          `
        }
        else{
          newElement.innerHTML =
          `
          <div class="images">
            <img class="item-img" src="${displayItem[0].itemImage}" alt="Card image cap">
          </div>
          <div class="descriptions">
            <ul class="breadcrumb">
              <li><a href="Index.html">Home</a></li>
              <li>${displayItem[0].itemName}</li>
            </ul>
            <div class="item-main">
              <h5 class="card-title item-name">${displayItem[0].itemName}</h5>
            </div>
            <div class="item-text">
              <p class="card-text item-desc">${displayItem[0].itemDesc}.</p>
            </div>
            <p class="card-text item-price">Php  ${displayItem[0].itemPrice}.</p>
            <button class="btn btn-primary addCart" type="button" name="button" id="button1">ADD TO CART</button>
          </div>
          `
        }
        productPlace.append(newElement)
    }

    function loadListener(){
      var addingCart = document.getElementsByClassName('addCart');
        for (var i = 0; i < addingCart.length; i++) 
          {
            addingCart[i].addEventListener('click',addToCart);
          }
    }