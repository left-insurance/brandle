
/* ELEMENTS */

const grid = document.getElementById("productGrid");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");

/* URL PARAMETERS */

const params = new URLSearchParams(window.location.search);

const searchQuery = params.get("search");
const category = params.get("cat");

/* CATEGORY → SEARCH TERM */

let query = searchQuery || "gadgets";

if(category === "toys") query = "gaming gadgets";
if(category === "cool") query = "cool gadgets";
if(category === "trending") query = "latest tech";

/* API URL */

const url =
`https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&country=IN&page=1`;

/* PRODUCTS STORAGE */

let products = [];

/* LOADING ANIMATION */

grid.innerHTML = `<div class="loader"></div>`;

/* FETCH PRODUCTS */

fetch(url,{

method:"GET",

headers:{
"X-RapidAPI-Key":"10ec1b5b9bmsh94024ce5ecef51ap100b88jsne4edc7db587b",
"X-RapidAPI-Host":"real-time-amazon-data.p.rapidapi.com"
}

})

.then(res=>res.json())

.then(data=>{
products = data.data.products;

/* CATEGORY PRICE FILTER */

if(category === "500"){

products = products.filter(p => 
parseFloat(p.product_price.replace(/[^0-9.]/g,'')) <= 500
);

}

if(category === "1000"){

products = products.filter(p => 
parseFloat(p.product_price.replace(/[^0-9.]/g,'')) <= 1000
);

}

displayProducts(products);
});

/* DISPLAY PRODUCTS */

function displayProducts(list){

grid.innerHTML="";

list.forEach(product=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<div class="product-card">

<div class="product-image">
<img src="${product.product_photo}">
</div>

<div class="product-info">

<h3>${product.product_title}</h3>

<div class="rating">
⭐ ${product.product_star_rating || "4.2"}
</div>

<p class="price">${product.product_price}</p>

<button class="amazon-btn" onclick="buyProduct('${product.product_title}')">
🔥 Check Best Price
</button>

<button class="amazon-btn">
Buy on Amazon
</button>

</a>

</div>

</div>

`;

grid.appendChild(card);

});

}

/* APPLY FILTERS */

function applyFilters(){

let filtered=[...products];

/* PRICE SORT */

if(priceFilter && priceFilter.value==="low"){

filtered.sort((a,b)=>

parseFloat(a.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(b.product_price.replace(/[^0-9.]/g,''))

);

}

if(priceFilter && priceFilter.value==="high"){

filtered.sort((a,b)=>

parseFloat(b.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(a.product_price.replace(/[^0-9.]/g,''))

);

}

/* RATING FILTER */

if(ratingFilter && ratingFilter.value!=="0"){

filtered = filtered.filter(p=>

parseFloat(p.product_star_rating || 4) >= ratingFilter.value

);

}

/* DISPLAY */

displayProducts(filtered);

}

/* FILTER EVENTS */

if(priceFilter){

priceFilter.addEventListener("change",applyFilters);

}

if(ratingFilter){

ratingFilter.addEventListener("change",applyFilters);

}

function buyProduct(title){

const query = title.replace(/ /g,"+");

const affiliateID = "brandle0a-21"; // ← replace if different

const url = `https://www.amazon.in/s?k=${query}&tag=${affiliateID}`;

window.open(url,"_blank");

}
