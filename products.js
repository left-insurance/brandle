const grid = document.getElementById("productGrid");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");

const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search") || "gadgets";

let products = [];

/* LOAD PRODUCTS */

fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${searchQuery}&country=IN&page=1`, {
method: "GET",
headers: {
"X-RapidAPI-Key": "10ec1b5b9bmsh94024ce5ecef51ap100b88jsne4edc7db587b",
"X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
}
})
.then(res => res.json())
.then(data => {
products = data.data.products;
displayProducts(products);
});


/* DISPLAY */

function displayProducts(list){

grid.innerHTML = "";

list.forEach(product => {

const card = document.createElement("div");

card.innerHTML = `

<div class="product-card">

<div class="product-image">
<img src="${product.product_photo}">
</div>

<div class="product-info">

<h3>${product.product_title}</h3>

<p class="price">${product.product_price}</p>

<button class="price-btn" onclick="buyProduct('${product.product_title}')">
Check Best Price
</button>

</div>

</div>

`;

grid.appendChild(card);

});

}


/* FILTER (WORKING + SIMPLE) */

function applyFilters(){

let filtered = [...products];

/* PRICE SORT */

if(priceFilter.value === "low"){
filtered.sort((a,b)=>
parseFloat(a.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(b.product_price.replace(/[^0-9.]/g,''))
);
}

if(priceFilter.value === "high"){
filtered.sort((a,b)=>
parseFloat(b.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(a.product_price.replace(/[^0-9.]/g,''))
);
}

/* RATING */

if(ratingFilter.value !== "0"){
filtered = filtered.filter(p =>
parseFloat(p.product_star_rating || 4) >= ratingFilter.value
);
}

displayProducts(filtered);

}

/* EVENTS */

if(priceFilter) priceFilter.addEventListener("change", applyFilters);
if(ratingFilter) ratingFilter.addEventListener("change", applyFilters);


/* AFFILIATE */

function buyProduct(title){

const query = title.replace(/ /g,"+");

const url = `https://www.amazon.in/s?k=${query}&tag=brandle0a-21`;

window.open(url,"_blank");

}
