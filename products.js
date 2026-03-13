const grid = document.getElementById("productGrid");

fetch("https://dummyjson.com/products")

.then(res => res.json())

.then(data => {

displayProducts(data.products);

});

function displayProducts(products){

grid.innerHTML = "";

products.forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<div class="product-card">

<div class="product-image">
<img src="${product.thumbnail}">
</div>

<div class="product-info">

<h3>${product.title}</h3>

<p class="price">₹${product.price}</p>

<button class="amazon-btn">Buy on Amazon</button>

</div>

</div>

`;

const button = card.querySelector(".amazon-btn");

button.addEventListener("click",function(){

const query = product.title.replace(/ /g,"+");

window.open("https://www.amazon.in/s?k="+query);

});

grid.appendChild(card);

});

}
