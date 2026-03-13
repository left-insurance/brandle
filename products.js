const grid = document.getElementById("productGrid");
const filter = document.getElementById("priceFilter");

const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search") || "gadgets";

const category = params.get("cat");

let query = searchQuery || "gadgets";

if(category === "toys") query = "gaming gadgets";

if(category === "cool") query = "cool gadgets";

if(category === "trending") query = "latest tech";
let products = [];

/* LOADING */

grid.innerHTML = `<div class="loader"></div>`;

fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&country=IN&page=1`, {

method: "GET",

headers: {
"X-RapidAPI-Key": "10ec1b5b9bmsh94024ce5ecef51ap100b88jsne4edc7db587b",
"X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
}

})

.then(res => res.json())

.then(data => {

products = data.data.products;

const category = params.get("cat");

if(category === "500"){
products = products.filter(p => parseFloat(p.product_price.replace(/[^0-9.]/g,'')) <= 500);
}

if(category === "1000"){
products = products.filter(p => parseFloat(p.product_price.replace(/[^0-9.]/g,'')) <= 1000);
}

displayProducts(products);

});


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

<p class="price">${product.product_price}</p>

<a href="${product.product_url}" target="_blank">

<button class="amazon-btn">Buy on Amazon</button>

</a>

</div>

</div>

`;

grid.appendChild(card);

});

}


/* FILTER */

filter.addEventListener("change",function(){

let sorted=[...products];

if(this.value==="low"){

sorted.sort((a,b)=>{

return parseFloat(a.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(b.product_price.replace(/[^0-9.]/g,''))

});

}

if(this.value==="high"){

sorted.sort((a,b)=>{

return parseFloat(b.product_price.replace(/[^0-9.]/g,'')) -
parseFloat(a.product_price.replace(/[^0-9.]/g,''))

});

}

displayProducts(sorted);

});
