
let card_details = [
    
        {
            id : 1,
            item : 'Audemar Piguet Royal Oak',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch3.jpeg",
            filter : "Men",
            price: "$20000",
        },
        {
          id : 2,
            item : 'Boucheron 18k',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch4.jpeg",
            filter : "Men",
            price: "$20500"
        },
        {
          id : 3,
            item : 'Rolex GMT-MASTER II',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch5.jpeg",
            filter : "Women",
            price: "$1500",
        },
        {
          id : 4,
            item : 'Bulgari Solotempo ST 30',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch6.jpeg",
            filter : "Men",
            price: "$100,000"
        },
        {
          id : 5,
            item : 'Chanel J12',
            description : "Some quick example text to build on the card title andmake up the bulk of the card's content",
            image : "./img/watch7.webp",
            filter : "Men",
            price: "XOF15000"
        },
        {
          id : 6,
            item : 'Chopard',
            description : "Case in 18K white gold, silver and black dial holding 10 superb mobile diamonds. Case diameter: 25 mm.",
            image : "./img/watch8.jpeg",
            filter : "Women",
            price: "$12000"
        },
        {
          id : 7,
            item : 'Titan MX-15',
            description : "Case in 18-carat white gold, openworked silver dial holding seven superb mobile diamonds.",
            image : "./img/watch13.webp",
            filter : "Women",
            price: "$2100"
        },
        {
          id: 8,
            item : 'Bill',
            description : "Case diameter: 20.5mm. Original 18k yellow gold bracelet.In very good condition. Signed and numbered.",
            image: "./img/watch10.jpeg",
            filter : "Children",
            price: "$200"
        },
        {
          id : 9,
            item : 'Bill',
            description : "Case diameter: 20.5mm. Original 18k yellow gold bracelet.In very good condition. Signed and numbered.",
            image : "./img/watch11.jpeg",
            filter : "Children",
            price: "$150"
        }
    ]
    const img_header = document.querySelector('.img-header');
    img_header.src = './img/watch1.png'
//---------__-_-____----__---______--_---_-----_______-_____________________________________________________________________
const orders_num = document.querySelector('.orders-num');
const btn_order = document.querySelectorAll(".btn-order");


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
createArticle (card_details);


const addToCart = ()=>{
  btn_order.forEach(btn =>{
    btn.addEventListener("click", ()=>{
      console.log('yoy');
    })
  })
}
addToCart();

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


/* 

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

