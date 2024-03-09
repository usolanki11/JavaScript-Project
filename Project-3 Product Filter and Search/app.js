let products = {
  data: [
    {
      productName: "Bravesoul Womens Watch",
      category: "Watch",
      price: "29.99",
      image: "./assets/bravesoulWomensWatch.jpg",
    },
    {
      productName: "DFND Mens Watch",
      category: "Watch",
      price: "39.99",
      image: "./assets/DFNDMensWatch.jpg",
    },
    {
      productName: "Kids Spiderman Watch",
      category: "Watch",
      price: "15.21",
      image: "./assets/KidsSpidermanWatch.jpg",
    },
    {
      productName: "Lucy K Womens Watch",
      category: "Watch",
      price: "39.99",
      image: "./assets/LucyKWomensWatch.jpg",
    },
    {
      productName: "Mens Adidas Beige Jacket",
      category: "Jacket",
      price: "110.00",
      image: "./assets/MensAdidasBeigeJacket.jpg",
    },
    {
      productName: "Mens Adidas Originals White Jacket",
      category: "Jacket",
      price: "170.00",
      image: "./assets/MensAdidasOriginalsWhiteJacket.jpg",
    },
    {
      productName: "Mens Avant Garde T-shirt",
      category: "Topwear",
      price: "40.99",
      image: "./assets/MensAvantGardeT-shirt.jpg",
    },
    {
      productName: "Mens Olive Trousers",
      category: "Bottomwear",
      price: "30.31",
      image: "./assets/MensOliveTrousers.jpg",
    },
    {
      productName: "Mens Timberland Watch",
      category: "Watch",
      price: "150.99",
      image: "./assets/MensTimberlandWatch.jpg",
    },
    {
      productName: "Pokemon Kids Watch",
      category: "Watch",
      price: "15.99",
      image: "./assets/PokemonKidsWatch.jpg",
    },
    {
      productName: "Womens Adidas Pink Jacket",
      category: "Jacket",
      price: "150.99",
      image: "./assets/WomensAdidasPinkjacket.jpg",
    },
    {
      productName: "Womens Adidas Beige Jacket",
      category: "Jacket",
      price: "160.99",
      image: "./assets/WomensAdidasBeigeJacket.jpg",
    },
    {
      productName: "Womens Adidas Pink Trouser",
      category: "Bottomwear",
      price: "50.99",
      image: "./assets/WomensAdidasPinkTrouser.jpg",
    },
    {
      productName: "Womens Adidas T-shirt",
      category: "Topwear",
      price: "20.49",
      image: "./assets/womensAdidasTshirt.jpg",
    },
    {
      productName: "Womens Adidas White Jacket",
      category: "Jacket",
      price: "120.99",
      image: "./assets/WomensAdidasWhiteJacket.jpg",
    },
    {
      productName: "Womens L'amour Tops",
      category: "Topwear",
      price: "44.00",
      image: "./assets/WomensL'amourTops.jpg",
    },
    {
      productName: "Womens Olive Trouser",
      category: "Bottomwear",
      price: "34.99",
      image: "./assets/WomensOliveTrousers.jpg",
    },
  ],
};

for (i of products.data) {
  //Create card
  let card = document.createElement("div");
  //Applying category to cards and hide the content initially
  card.classList.add("card", i.category, "hide");
  //Img div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img_container");
  //Img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //Container
  let container = document.createElement("div");
  container.classList.add("container");
  //Product Name
  let name = document.createElement("h5");
  name.classList.add("product_name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //Price
  let price = document.createElement("h6");
  price.innerText = `$ ${i.price}`;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//Passing parameter to function from button
function filterProduct(value) {
  //Accessing button class
  let buttons = document.querySelectorAll(".button_value");
  buttons.forEach((button) => {
    //Check if the value equals innertext
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //selecting cards based on filters
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on all button
    if (value == "All") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category value
      if (element.classList.contains(value)) {
        //display elements based on category
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search
document.getElementById("search").addEventListener("click", () => {
  console.log("Clicked");
  let searchInput = document.getElementById("search_input").value;
  console.log(searchInput);
  let elements = document.querySelectorAll(".product_name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    // check if the text includes search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching cards
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("All");
};
