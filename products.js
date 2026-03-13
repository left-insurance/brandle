const grid = document.getElementById("productGrid");

fetch("https://dummyjson.com/products/category/smartphones")

.then(res => res.json())

.then(data => {

displayProducts(data.products);

});

function displayProducts(products){

grid.innerHTML="";

products.forEach(product => {

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${product.thumbnail}" alt="${product.title}">

<h3>${product.title}</h3>

<p style="padding:10px">Price: ₹${product.price}</p>

<button class="buyBtn">Buy on Amazon</button>

`;

const button = card.querySelector(".buyBtn");

button.addEventListener("click",function(){

const searchQuery = product.title.replace(/ /g,"+");

window.open(
"https://www.amazon.in/s?k=" + searchQuery,
"_blank"
);

});

grid.appendChild(card);

});

}
