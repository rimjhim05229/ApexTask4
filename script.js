const products = [

  {
    name:"Laptop",

    category:"electronics",

    price:50000,

    image:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
  },

  {
    name:"Headphones",

    category:"electronics",

    price:2500,

    image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
  },

  {
    name:"T-Shirt",

    category:"fashion",

    price:1200,

    image:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
  },

  {
    name:"Jacket",

    category:"fashion",

    price:3000,

    image:
    "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600"
  }

];

const productContainer =
document.getElementById(
  "productContainer"
);

const categoryFilter =
document.getElementById(
  "categoryFilter"
);

const sortPrice =
document.getElementById(
  "sortPrice"
);

const searchInput =
document.getElementById(
  "search"
);

/* DISPLAY PRODUCTS */

function displayProducts(items){

  productContainer.innerHTML = "";

  items.forEach(function(product){

    const card =
    document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `

      <img src="${product.image}">

      <h3>${product.name}</h3>

      <p>${product.category}</p>

      <p class="price">
        ₹${product.price}
      </p>

    `;

    productContainer.appendChild(card);

  });
}

/* FILTER */

function filterProducts(){

  let filtered = [...products];

  /* CATEGORY */

  const category =
  categoryFilter.value;

  if(category !== "all"){

    filtered = filtered.filter(function(product){

      return product.category === category;

    });
  }

  /* SEARCH */

  const searchText =
  searchInput.value.toLowerCase();

  filtered = filtered.filter(function(product){

    return product.name
    .toLowerCase()
    .includes(searchText);

  });

  /* SORT */

  const sort =
  sortPrice.value;

  if(sort === "lowToHigh"){

    filtered.sort(function(a,b){

      return a.price - b.price;

    });

  }else if(sort === "highToLow"){

    filtered.sort(function(a,b){

      return b.price - a.price;

    });
  }

  displayProducts(filtered);
}

/* EVENTS */

categoryFilter.addEventListener(
  "change",
  filterProducts
);

sortPrice.addEventListener(
  "change",
  filterProducts
);

searchInput.addEventListener(
  "keyup",
  filterProducts
);

/* INITIAL */

displayProducts(products);