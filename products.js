const grid = document.getElementById("productGrid");
const filter = document.getElementById("priceFilter");

let products = [];

fetch("https://dummyjson.com/products")

.then(res => res.json())

.then(data => {

products = data.products;

displayProducts(products);

});

function displayProducts(list){

grid.innerHTML="";

list.forEach(product => {

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${product.thumbnail}">

<h3>${product.title}</h3>

<p style="padding:10px">Price: ₹${product.price}</p>

`;

grid.appendChild(card);

});

}

filter.addEventListener("change",function(){

let sorted=[...products];

if(this.value==="low"){

sorted.sort((a,b)=>a.price-b.price);

}

if(this.value==="high"){

sorted.sort((a,b)=>b.price-a.price);

}

displayProducts(sorted);

});
