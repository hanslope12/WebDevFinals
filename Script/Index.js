sessionStorage.removeItem('productDisplay')

var indexOrProd = true;
var getSearch = JSON.parse(sessionStorage.getItem('searchList'))
var getList = JSON.parse(localStorage.getItem('itemList'))
sessionStorage.removeItem('productDisplay')
//populates the Products
  const checkList = localStorage.getItem('itemList')
  if(getList == null)
  {
    var product1 = 
    {
        itemName : "adidas Lifestyle Advantage Lifestyle Court Lace Shoes Unisex White IG2511",
        itemDesc : "These kids' adidas lace-up sneakers are great for school, sports clubs and all the play that kids fit in between. They're made with a smooth, synthetic upper for a comfortable feel. A sturdy rubber outsole offers dependable traction. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
        itemPrice: 2300,
        itemImage: "Img/product1.jfif",
        itemShortDesc: "These kids' adidas lace-up sneakers are great for school, sports clubs and all the play that kids fit in between"
    }

  var product2 = 
  {
    itemName : "adidas Swimming and Lifestyle Adilette Shower Slides Unisex Black GZ5922",
    itemDesc : "From the pool deck to the shower to the couch, these slides are made for the work-hard-rest-hard lifestyle. The slip-on construction gives you a snug fit that's easy to kick on and off as needed. Lightweight cushioning keeps your feet cradled in all-day comfort. The adidas logo and 3-Stripes design complete the iconic Adilette style.",
    itemPrice: 1500,
    itemImage: "Img/product2.jfif" ,
    itemShortDesc: "From the pool deck to the shower to the couch, these slides are made for the work-hard-rest-hard lifestyle. The slip-on construction gives you a snug fit that's easy to kick on and off as needed."
  }

  var product3 = 
  {
    itemName : "adidas Running Galaxy 6 Shoes Men Black GW3848",
    itemDesc : "Lace up and go. These adidas running shoes will keep you comfortable, however late your day runs. A great everyday shoe, they have a light and airy mesh upper to keep your feet cool and a Cloudfoam midsole for springiness. The rubber outsole is designed to stay firm across all surfaces, from wet grass to slow clay. Switch up your plans without changing your shoes. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    itemPrice: 3500,
    itemImage: "Img/product3.jfif" ,
    itemShortDesc: "Lace up and go. These adidas running shoes will keep you comfortable, however late your day runs. A great everyday shoe, they have a light and airy mesh upper to keep your feet cool and a Cloudfoam midsole for springiness. The rubber outsole is designed to stay firm across all surfaces, from wet grass to slow clay. Switch up your plans without changing your shoes. "
  }

  var product4 = 
  {
    itemName : "adidas Running Duramo SL Shoes Women White IF7875",
    itemDesc : "Feel light, fast and free. When you're ready to pick up the pace and train for courses up to 10 kilometres, these adidas running shoes support your efforts with comfort. They're light from top to bottom with a soft mono mesh upper and stable LIGHTMOTION midsole. On the track or pavement, an Adiwear outsole provides durability and grip. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    itemPrice: 3800,
    itemImage: "Img/product4.jfif" ,
    itemShortDesc: "Feel light, fast and free. When you're ready to pick up the pace and train for courses up to 10 kilometres, these adidas running shoes support your efforts with comfort. "
  }

  var product5 = 
  {
    itemName : "adidas Running Galaxy 6 Shoes Women Black GW3847",
    itemDesc : "It was true then, and it's true now. adidas designs shoes with athletes in mind. These running shoes can be worn anytime, but they're still equipped with some innovative tech. The lightweight mesh upper lets air flow, and the Cloudfoam midsole gives a springy, cushioned feel. A soft sockliner keeps feet feeling supported, no matter how often you put them through a long walk or workout. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    itemPrice: 3500,
    itemImage: "Img/product5.jfif" ,
    itemShortDesc: "It was true then, and it's true now. adidas designs shoes with athletes in mind. These running shoes can be worn anytime, but they're still equipped with some innovative tech."
  }

  var product6 = 
  {
    itemName : "adidas Running Runfalcon 3.0 Shoes Men Black HP7544",
    itemDesc : "Lace up for a run through the park or a walk to the coffee shop in these versatile adidas running shoes. They feel good from the minute you step in, thanks to the cushy Cloudfoam midsole. The textile upper feels comfy and breathable, and the rubber outsole gives you plenty of grip for a confident stride. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.",
    itemPrice: 3500,
    itemImage: "Img/product6.jfif" ,
    itemShortDesc: "Lace up for a run through the park or a walk to the coffee shop in these versatile adidas running shoes. They feel good from the minute you step in, thanks to the cushy Cloudfoam midsole."
  }

  var product7 = 
  {
    itemName : "adidas Lifestyle and Basketball Cushioned Crew Socks 3 Pairs Unisex Black IC1310",
    itemDesc : "From daily training to the big occasions, adidas crew length socks keep you moving comfortably. They wrap around the arches of your feet and cushion high-pressure areas at the heels and toes. So you stay focused on performance, whether you're running, lifting or playing sports. A minimum of 70% of this product is a blend of recycled and renewable materials.",
    itemPrice: 700,
    itemImage: "Img/product7.jfif" ,
    itemShortDesc: "From daily training to the big occasions, adidas crew length socks keep you moving comfortably. They wrap around the arches of your feet and cushion high-pressure areas at the heels and toes."
  }

  var product8 =
  {
    itemName : "adidas Running Ultrabounce Shoes Women Black HP5786",
    itemDesc : "Ready to ramp up your training? These adidas shoes help you take the next step in your running journey. Lightweight Bounce cushioning provides comfort and flexibility to keep you energised when you add kilometres to your daily run. The long-lasting rubber outsole ensures traction on varied surfaces so you can stride with confidence.",
    itemPrice: 4500,
    itemImage: "Img/product8.jfif" ,
    itemShortDesc: "Ready to ramp up your training? These adidas shoes help you take the next step in your running journey. Lightweight Bounce cushioning provides comfort and flexibility to keep you energised when you add kilometres to your daily run."
  }
  var product9 = 
  {
    itemName : "adidas Running Running AEROREADY Four-Panel Mesh Cap Unisex White HR7053",
    itemDesc : "When the sun is shining and the heat is high, this adidas running cap comes along on your run. A pre-curved brim keeps you squint free through shadeless stretches of pavement, and the mesh build means there's always airflow. Even when hills get your heart rate up, AEROREADY absorbs moisture to keep you dry.Made with a series of recycled materials, and at least 40% recycled content, this product represents just one of our solutions to help end plastic waste.",
    itemPrice: 1400,
    itemImage: "Img/product9.jfif" ,
    itemShortDesc: "When the sun is shining and the heat is high, this adidas running cap comes along on your run. A pre-curved brim keeps you squint free through shadeless stretches of pavement, and the mesh build means there's always airflow. Even when hills get your heart rate up, AEROREADY absorbs moisture to keep you dry."
  }

    var itemList = [product1 ,product2 ,product3 ,product4 ,product5 ,product6 ,product7 ,product8 ,product9]

    localStorage.setItem('itemList', JSON.stringify(itemList))
    }
    //loads the entire list
    function makeEverything()
    {
      
      productPlace = document.getElementById("products");
      productPlace.innerHTML = ""
      for(var i = 0; i< getList.length; i++)
      {
        if(i % 4 ==0)
        {
          const row = document.createElement('div');
          row.classList.add('items');
          row.classList.add('d-flex');
          row.classList.add('flex-row');
          productPlace.append(row);
        }
      }

        var getRow = document.getElementsByClassName('items');
        var count = 0;
      for(var i = 0; i< getRow.length; i++)
      {
        if(i != getRow.length -1){
          for(var o = 0; o < 4; o++)
          {
            var newElement = document.createElement('div');
            newElement.setAttribute("id","item");
            newElement.classList.add('items-div');
            newElement.innerHTML =
            `
            <div class="card p-2 m-2" style="width: 18rem;">
            <img class="card-img-top item-img" src="${getList[o+(count*4)].itemImage}" alt="Card image cap">
            <div class="card-body">
            <button class="display-name btn-link wrap product-link"><h5 class="btn-link card-title item-name">${getList[o+(count*4)].itemName}</h5></button>
              <p class="card-text item-desc">${getList[o+(count*4)].itemShortDesc}</p>
              <p class="card-text item-price">Php ${getList[o+(count*4)].itemPrice}</p>
              <button class="btn btn-primary addCart" type="button" name="button" id="button1">ADD TO CART</button>
            </div>
          </div>
            `
            getRow[i].append(newElement)
          }
          count++
          
        }else{
          for(var o = 0; o < (getList.length % 4); o++)
          {
            var newElement = document.createElement('div');
            newElement.setAttribute("id","item");
            newElement.classList.add('items-div');
            newElement.innerHTML =
            `
            <div class="card p-2 m-2" style="width: 18rem;">
            <img class="card-img-top item-img" src="${getList[o+(count*4)].itemImage}" alt="Card image cap">
            <div class="card-body">
            <button class="display-name btn-link wrap product-link"><h5 class="btn-link card-title item-name">${getList[o+(count*4)].itemName}</h5></button>
              <p class="card-text item-desc">${getList[o+(count*4)].itemShortDesc}</p>
              <p class="card-text item-price">Php ${getList[o+(count*4)].itemPrice}</p>
              <button class="btn btn-primary addCart" type="button" name="button" id="button1">ADD TO CART</button>
            </div>
          </div>
            `
            getRow[i].append(newElement)
          }
          count++
        }
    }
        calculateTotal()
    }

    function makeSearch()
    {
      productPlace = document.getElementById("products");
      productPlace.innerHTML = ""
      for(var i = 0; i< getSearch.length; i++)
      {
        if(i % 4 ==0)
        {
          const row = document.createElement('div');
          row.classList.add('items');
          row.classList.add('d-flex');
          row.classList.add('flex-row');
          productPlace.append(row);
        }
      }

        var getRow = document.getElementsByClassName('items');
        var count = 0;
        for(var i = 0; i< getRow.length; i++)
          {
            if(i != getRow.length -1)
              {
              for(var o = 0; o < 4; o++)
                {
                  var newElement = document.createElement('div');
                  newElement.setAttribute("id","item");
                  newElement.classList.add('items-div');
                  newElement.innerHTML =
                  `
                    <div class="card p-2 m-2" style="width: 18rem;">
                      <img class="card-img-top item-img" src="${getSearch[o+(count*4)].itemImage}" alt="Card image cap">
                    <div class="card-body">
                      <button class="display-name btn-link wrap product-link"><h5 class="btn-link card-title item-name">${getSearch[o+(count*4)].itemName}</h5></button>
                      <p class="card-text item-desc">${getSearch[o+(count*4)].itemShortDesc}</p>
                      <p class="card-text item-price">Php ${getSearch[o+(count*4)].itemPrice}</p>
                     <button class="btn btn-primary addCart" type="button" name="button" id="button1">ADD TO CART</button>
                    </div>
                    </div>
                        `
                        getRow[i].append(newElement)
                        console.log("items")
                      }
                      count++
                      console.log()
                    }
                  else
                  {
                    for(var o = 0; o < (getSearch.length % 4); o++)
                    {
                      var newElement = document.createElement('div');
                      newElement.setAttribute("id","item");
                      newElement.classList.add('items-div');
                      newElement.innerHTML =
                      `
                      <div class="card p-2 m-2" style="width: 18rem;">
                      <img class="card-img-top item-img" src="${getSearch[o+(count*4)].itemImage}" alt="Card image cap">
                      <div class="card-body">
                      <button class="display-name btn-link wrap product-link"><h5 class="btn-link card-title item-name">${getSearch[o+(count*4)].itemName}</h5></button>
                        <p class="card-text item-desc">${getSearch[o+(count*4)].itemShortDesc}</p>
                        <p class="card-text item-price">Php ${getSearch[o+(count*4)].itemPrice}</p>
                        <button class="btn btn-primary addCart" type="button" name="button" id="button1">ADD TO CART</button>
                      </div>
                    </div>
                      `
                      getRow[i].append(newElement)
                    }
                  }
    }
  }
    //loads the products + listeners
   function loadItems()
    {
      if(getSearch == null || getSearch == "")
      {
       makeEverything();
      }
      else
        {
          console.log(getSearch)
          makeSearch();
        }
          
      var addingCart = document.getElementsByClassName('addCart');
      for (var i = 0; i < addingCart.length; i++) 
        {
          addingCart[i].addEventListener('click',addToCart);
        }
      var productPage = document.getElementsByClassName('product-link');
      for (var i = 0; i < addingCart.length; i++) 
      {
        productPage[i].addEventListener('click',productData);
      }
     
   }

//passes data for product_page 
function productData(event)
{
  var button = event.target;
  var parentCon = button.parentElement.parentElement.parentElement;
  var itemName = parentCon.getElementsByClassName("item-name")[0].innerHTML; 

  sessionStorage.setItem('productDisplay', JSON.stringify(itemName))
  let displayItem = []
        getList.forEach(item => {
          if(item.itemName== itemName)
          {
           displayItem.push(item)
          }
        }
        )
  window.location.href = "Product_page.html";
}