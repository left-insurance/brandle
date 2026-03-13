const grid = document.getElementById("productGrid");

const params = new URLSearchParams(window.location.search);

const searchQuery = params.get("search") || "gadgets";

const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${searchQuery}&country=IN&page=1`;

fetch(url, {

method: "GET",

headers: {

"X-RapidAPI-Key": "10ec1b5b9bmsh94024ce5ecef51ap100b88jsne4edc7db587b",

"X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"

}

})

.then(res => res.json())

.then(data => {

displayProducts(data.data.products);

});

function displayProducts(products){

grid.innerHTML="";

products.forEach(product=>{

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
