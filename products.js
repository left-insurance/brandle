const grid = document.getElementById("productGrid");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");

const params = new URLSearchParams(window.location.search);

let searchQuery = params.get("search");
const category = params.get("cat");

/* CATEGORY MAPPING */

if(!searchQuery){
if(category === "cool") searchQuery = "cool gadgets";
else if(category === "toys") searchQuery = "gaming gadgets";
else if(category === "trending") searchQuery = "latest tech gadgets";
else if(category === "500") searchQuery = "gadgets under 500";
else if(category === "1000") searchQuery = "gadgets under 1000";
else searchQuery = "gadgets";
}

/* LOADING */

grid.innerHTML = "Loading...";

/* FETCH PRODUCTS */

fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${searchQuery}&country=IN&page=1`, {
method: "GET",
headers: {
"X-RapidAPI-Key": "10ec1b5b9bmsh94024ce5ecef51ap100b88jsne4edc7db587b",
"X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
}
})
.then(res => res.json())
.then(data => {

if(!data || !data.data || !data.data.products){
grid.innerHTML = "No products found";
return;
}

products = data.data.products;

displayProducts(products);

})
.catch(err=>{
console.error(err);
grid.innerHTML = "Error loading products";
});


/* DISPLAY FUNCTION */

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

<div class="rating">
⭐ ${product.product_star_rating || "4.2"}
</div>

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


/* FILTERS */

function applyFilters(){

/* SHOW SPINNER */

grid.innerHTML = `<div class="loader"></div>`;

/* SMALL DELAY FOR UX */

setTimeout(()=>{

let filtered = [...products];

/* PRICE SORT */

if(priceFilter && priceFilter.value === "low"){
filtered.sort((a,b)=>
parseFloat(a.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(b.product_price.replace(/[^0-9.]/g,''))
);
}

if(priceFilter && priceFilter.value === "high"){
filtered.sort((a,b)=>
parseFloat(b.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(a.product_price.replace(/[^0-9.]/g,''))
);
}

/* RATING FILTER */

if(ratingFilter && ratingFilter.value !== "0"){
filtered = filtered.filter(p =>
parseFloat(p.product_star_rating || 4) >= ratingFilter.value
);
}

/* SHOW RESULTS */

displayProducts(filtered);

},400);

}

/* EVENTS */

if(priceFilter) priceFilter.addEventListener("change", applyFilters);
if(ratingFilter) ratingFilter.addEventListener("change", applyFilters);


/* AMAZON AFFILIATE */

function buyProduct(title){

const query = title.replace(/ /g,"+");

const affiliateID = "brandle0a-21"; // <-- YOUR ID

const url = `https://www.amazon.in/s?k=${query}&tag=${affiliateID}`;

window.open(url,"_blank");

}
