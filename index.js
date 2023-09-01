
const card_details = [
    
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch3.jpeg",
            filter : "filter-men",
            price: "XOF15000",
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch4.jpeg",
            filter : "filter-men",
            price: "XOF15000"
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch5.jpeg",
            filter : "filter-women",
            price: "XOF15000",
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch6.jpeg",
            filter : "filter-men",
            price: "XOF15000"
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch7.webp",
            filter : "filter-men",
            price: "XOF15000"
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch8.jpeg",
            filter : "filter-women",
            price: "XOF15000"
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch1.png",
            filter : "filter-men",
            price: "XOF15000"
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch10.jpeg",
            filter : "filter-children",
            price: "XOF15000"
        },
        {
            item : 'Rolex1',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch11.jpeg",
            filter : "filter-children",
            price: "XOF15000"
        }
    ]
    const img_header = document.querySelector('.img-header');
    img_header.src = './img/watch1.png'
//---------__-_-____----__---______--_---_-----_______-_____________________________________________________________________
const orders_num = document.querySelector('.orders-num');
const btn_order = document.querySelectorAll(".btn-order");


function createArticle (){
  const items_grid = document.querySelector('.items-grid');
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
          <div class="price">${card_details[i].price}
          </div>
        <div class="btn-order">
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
        </div>
        </div>
      </div>
    </div>
  </div>`
  items_grid.innerHTML += listItem
}
}
createArticle ();


const addToCart = ()=>{
 btn_order.forEach(order =>{
  order.addEventListener("click", (e)=>{
      e.preventDefault();
      orders_num.innerHTML++;
      orders_num.setAttribute('style', 'display: block')
    })
  })
}
addToCart()

/* const filterButtons = document.querySelectorAll('.btn-filter');
const items = document.querySelectorAll('.col');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedFilter = button.classList.contains('filter-men')
      ? 'filter-men'
      : button.classList.contains('filter-women')
      ? 'filter-women'
      : button.classList.contains('filter-children')
      ? 'filter-children'
      : '*';
    console.log(selectedFilter);
    filterButtons.forEach(btn => {
      btn.parentElement.classList.remove('filter-active');
    });
    button.parentElement.classList.add('filter-active');

    items.forEach(item => {
      if (selectedFilter === '*' || item.classList.contains(selectedFilter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
 */


/* const filterList = document.querySelectorAll('.li-filter');

filterList.forEach(filter => {
  filter.addEventListener('click', () => {
    // Supprimer la classe 'filter-active' de tous les filtres
    filterList.forEach(li => {
      li.classList.add('filter-active');
  
    });
    // Ajouter la classe 'filter-active' au filtre actuel
    filter.classList.remove('filter-active');
    // Récupérer la valeur du filtre à partir de l'attribut data-filter
    const selectedFilter = filter.getAttribute('data-filter');

    // Afficher ou masquer les cartes en fonction du filtre sélectionné
    const cardColumns = document.querySelectorAll('.cardCol');
    cardColumns.forEach(column => {
      if (selectedFilter === '*' || column.classList.contains(selectedFilter)) {
        column.style.display = 'block';
      } else {
        column.style.display = 'none';
   
      }
    });
  });

}); */


/* var items = document.querySelectorAll('.filter-sections div');
animate(items);

// filter on click
each('.filter-links li a', function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    filterLinks(el);
  });
});

// filter links functions
function filterLinks(element) {
  // get text 
  var el = element.textContent,
    // convert to lowercase
    linksTolowerCase = el.toLowerCase();
  // if all remove all elements
  if (el === 'All') {
    // first show all view class
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // no show init animation
    animate(items);
  } else {
    // if not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
  }
  // show animation for current elements
  animate(document.querySelectorAll('.' + linksTolowerCase));
};
// forech arrays
function each(el, callback) {
  var allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animate function
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      item[counter].classList.add('view');
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
}; */

