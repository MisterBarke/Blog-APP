
let card_details = [
    
        {
                  id : 1,
            item : 'Audemar Piguet Royal Oak',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch3.jpeg",
            filter : "Men",
            price: "20000",
            rating : 0
        
          },
        {
            id : 2,
            item : 'Boucheron 18k',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch4.jpeg",
            filter : "Men",
            price: "20500",
            rating : 0
        
          },
        {
        id : 3,
            item : 'Rolex GMT-MASTER II',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch5.jpeg",
            filter : "Women",
            price: "1500",
            rating : 0
        
          },
        {
          id : 4,
            item : 'Bulgari Solotempo ST 30',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch6.jpeg",
            filter : "Men",
            price: "100000",
            rating : 0
        
          },
        {
           id : 5,
            item : 'Chanel J12',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch7.webp",
            filter : "Men",
            price: "15000",
            rating : 0
        
          },
        {
           id : 9,
            item : 'Chopard',
            description : "Case in 18K white gold, silver and black dial holding 10 superb mobile diamonds. Case diameter: 25 mm.",
            image : "./img/watch8.jpeg",
            filter : "Women",
            price: "12000",
            rating : 0
        
          },
        {
        id : 6,
            item : 'Titan MX-15',
            description : "Case in 18-carat white gold, openworked silver dial holding seven superb mobile diamonds.",
            image : "./img/watch13.webp",
            filter : "Women",
            price: "2100",
            rating : 0
        
          },
        {
            id : 7,
            item : 'Bill',
            description : "Case diameter: 20.5mm. Original 18k yellow gold bracelet.In very good condition. Signed and numbered.",
            image: "./img/watch10.jpeg",
            filter : "Children",
            price: "200",
            rating : 0
        
          },
        {      id : 8,
            item : 'Barbie Gold',
            description : "Case diameter: 20.5mm. Original 18k yellow gold bracelet.In very good condition. Signed and numbered.",
            image : "./img/watch11.jpeg",
            filter : "Children",
            price: "150",
            rating : 0
        
          },
    ]
    const img_header = document.querySelector('.img-header');
    img_header.src = './img/watch1.png';
    const floatingActioButton = document.getElementById('floatingActionButton');
    const modalContainer = document.getElementById('modal-container');
    const resetOrders = document.getElementById("resetOrders");
    const divToTal = document.getElementById("total-price");
    let divTotal = document.getElementById('total-price');

    let totalPrice = parseFloat(localStorage.getItem('total-price')) || 0;
    let itemContent = JSON.parse(localStorage.getItem('div-item')) || [];

   

//---------__-_-____----__---______--_---_-----_______-_____________________________________________________________________
const orders_num = document.querySelector('.orders-num');
function createArticle (card_details){
  const items_grid = document.querySelector('.items-grid');
  items_grid.innerHTML = ""
  for (let i = 0; i < card_details.length; i++) {

  const listItem = `<div class="col cardCol ${card_details[i].filter}">
    <div class="p-3">
      <div class="card" style="width: 100%">
        <img src=${card_details[i].image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${card_details[i].item}</h5>
          <p class="card-text">
            ${card_details[i].description}
          </p>
          <div class="price">$${card_details[i].price}
          </div>
        <button id="btn-order">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-cart-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
          />
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          />
        </svg>
        </button>
        <div class="rating-box">
      <div class="stars">
        <i class="bi-solid bi-star"></i>
        <i class="bi-solid bi-star"></i>
        <i class="bi-solid bi-star"></i>
        <i class="bi-solid bi-star"></i>
        <i class="bi-solid bi-star"></i>
      </div>
    </div>
      
        </div>
      </div>
    </div>
  </div>`
  items_grid.innerHTML += listItem;

  const star = document.querySelectorAll('.bi-star')
// console.log(star);
star.forEach(element => {
  element.addEventListener('click', e => {
    const parentStar = e.target.parentElement;
    // console.log(e.target.parentElement);
    const stars = parentStar.querySelectorAll("i");
    let check = false;
    for (let i = 0; i < stars.length; i++) {
      if(!check) {
        stars[i].classList.remove('bi-star');
        stars[i].classList.add('bi-star-fill');
        if (stars[i] === e.target) check = true;
      } else {
        stars[i].classList.add('bi-star');
        stars[i].classList.remove('bi-star-fill');
      
      }
    }
  })
})
}

}





createArticle (card_details);



let cartArr = [];

 

const addToCart = ()=>{
  document.addEventListener('DOMContentLoaded', () => {

    const btn_order = document.querySelectorAll("#btn-order");

  
  
     btn_order.forEach((button, index) =>{
      button.addEventListener('click', () => {
        const product = card_details[index];
        const existingCartItem = cartArr.find(cart => cart.item === product.item);

        if (!existingCartItem) {
        const cartObject = {
          item : product.item,
          price : product.price,
          image : product.image
        }
        cartArr.push(cartObject);
       
        localStorage.setItem('cartArr', JSON.stringify(cartArr));
        var cartRow = document.createElement('tr');
        cartRow.classList.add('cart-row');
        var cartItems = document.getElementsByClassName('cart-items')[0];
        const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));
        if (storedCartArr) {
          cartArr = storedCartArr;
      
        cartArr.forEach(cart =>{
          var cartRowContents = `
    
          <td class="cart-item cart-column">
              <img class="cart-item-image" src="${cart.image}" width="50" height="50">
              <span class="cart-item-title">${cart.item}</span>                  
          </td>
          <td class="cart-item cart-column">
              <span class="cart-price cart-column">${cart.price}</span>
          </td>
          <td class="cart-item cart-column">
              <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
              <button class="btn btn-danger" type="button">Remove</button>
          </td>        
      `;
      cartRow.innerHTML = cartRowContents;
        })

    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    updateCartTotal();
      }
    }else{
      alert('This has item already been added to the cart!');
    }
       });
      
     });   

      // Select all elements with the "i" tag and store them in a NodeList called "stars"

  });
displayCartFromLocalStorage()
}
addToCart();

// Fonction pour afficher les éléments du panier depuis le stockage local
function displayCartFromLocalStorage() {
  const cartItems = document.getElementsByClassName('cart-items')[0];
  cartItems.innerHTML = '';

  const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));

  if (storedCartArr) {
    cartArr = storedCartArr;

    cartArr.forEach(cart => {
      var cartRow = document.createElement('tr');
      cartRow.classList.add('cart-row');

      var cartRowContents = `
        <td class="cart-item cart-column">
          <img class="cart-item-image" src="${cart.image}" width="50" height="50">
          <span class="cart-item-title">${cart.item}</span>                  
        </td>
        <td class="cart-item cart-column">
          <span class="cart-price cart-column">${cart.price}</span>
        </td>
        <td class="cart-item cart-column">
          <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
          <button class="btn btn-danger" type="button">Remove</button>
        </td>        
      `;
     
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);

      cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
      cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    
    });
  
    updateCartTotal();
  }
}



window.addEventListener('load', () => {
  const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));

  if (storedCartArr) {
    cartArr = storedCartArr;
    // Affiche les éléments du panier au chargement de la page
    addToCart()
    updateCartTotal();
  }
});

// Ajoutez un gestionnaire d'événements click à chaque bouton
function removeCartItem(event) {
  let buttonClicked = event.target;
  let cartItem = buttonClicked.parentElement.parentElement;
  let itemName = cartItem.getElementsByClassName('cart-item-title')[0].innerText;
  
  // Supprimer l'élément du local storage en utilisant son nom (itemName)
  const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));
  if (storedCartArr) {
    const updatedCartArr = storedCartArr.filter(cart => cart.item !== itemName);
    localStorage.setItem('cartArr', JSON.stringify(updatedCartArr));
  }

  // Supprimer l'élément de l'affichage du panier
  cartItem.remove();
  updateCartTotal();
  addToCart()
}
function quantityChanged(event){
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0 ){
      input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0 ; i< cartRows.length ; i++){
      var cartRow =cartRows[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      var price = parseFloat(priceElement.innerText)
      var quantity = quantityElement.value;
      total = total + (price * quantity);
       
  }
  total = Math.round(total * 100 )/100;
  document.getElementsByClassName('cart-total-price')[0].innerText = "$" + total + '.00';

}





let filteredEl ;
const filterList = document.querySelectorAll('.li-filter');
filterList.forEach(btn=>{

  btn.addEventListener("click", ()=>{


if (btn.textContent.trim() === "All"){
  filteredEl = card_details
}else{
  filteredEl = card_details.filter(el=>el.filter===btn.textContent.trim());
  
}
createArticle (filteredEl);
  })
});
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  filteredEl = card_details.filter(el =>
    el.item.toLowerCase().includes(searchText) ||
    el.description.toLowerCase().includes(searchText)
  );
  createArticle(filteredEl);
});