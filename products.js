const grid = document.getElementById("productGrid");
const filter = document.getElementById("priceFilter");

const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search") || "gadgets";

let products = [];

/* LOADING */

grid.innerHTML = `<div class="loader"></div>`;

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
