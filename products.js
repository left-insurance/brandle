const params = new URLSearchParams(window.location.search);

const category = params.get("cat");

const title = document.getElementById("categoryTitle");

const grid = document.getElementById("productGrid");

const products = {

cool: [
{ name: "Mini Projector", price: "₹2999" },
{ name: "Magnetic Charging Cable", price: "₹399" },
{ name: "Portable Monitor", price: "₹7999" }
],

toys: [
{ name: "VR Headset", price: "₹2499" },
{ name: "Mini Drone", price: "₹3499" },
{ name: "Smart LED Cube", price: "₹999" }
],

};

title.innerText = category.toUpperCase() + " GADGETS";

products[category].forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML =
"<h3>" + product.name + "</h3>" +
"<p style='padding:15px'>Price: " + product.price + "</p>";

grid.appendChild(card);

});
