const grid = document.getElementById("productGrid");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");

const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search") || "gadgets";

let products = [];

/* LOAD PRODUCTS */
const page = searchQuery ? 1 : Math.floor(Math.random() * 5) + 1;

fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${searchQuery}&country=IN&page=1`, {
method: "GET",
headers: {
"X-RapidAPI-Key": "10ec1b5b9bmsh94024ce5ecef51ap100b88jsne4edc7db587b",
"X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
}
})
.then(res => res.json())
.then(data => {

console.log(data); // IMPORTANT

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





/* FILTER (WORKING + SIMPLE) */

