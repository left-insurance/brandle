const params = new URLSearchParams(window.location.search);

const category = params.get("cat");

const title = document.getElementById("categoryTitle");
const grid = document.getElementById("productGrid");

const products = {

cool: [
{
name: "Mini Projector",
price: "₹2999",
img: "https://m.media-amazon.com/images/I/61G2h2QqKJL._AC_SL1500_.jpg"
},
{
name: "Magnetic Charging Cable",
price: "₹399",
img: "https://m.media-amazon.com/images/I/61vKQ0K9JPL._AC_SL1500_.jpg"
},
{
name: "Portable Monitor",
price: "₹7999",
img: "https://m.media-amazon.com/images/I/71D8+8YzJ7L._AC_SL1500_.jpg"
}
],

toys: [
{
name: "VR Headset",
price: "₹2499",
img: "https://m.media-amazon.com/images/I/61P0L2q3y4L._AC_SL1500_.jpg"
},
{
name: "Mini Drone",
price: "₹3499",
img: "https://m.media-amazon.com/images/I/61Xn+3oQ4XL._AC_SL1500_.jpg"
},
{
name: "Smart LED Cube",
price: "₹999",
img: "https://m.media-amazon.com/images/I/71n2o6xk+TL._AC_SL1500_.jpg"
}
],

500: [
{
name: "LED Strip Lights",
price: "₹299",
img: "https://m.media-amazon.com/images/I/71kI9v8Hj4L._AC_SL1500_.jpg"
},
{
name: "Phone Stand",
price: "₹199",
img: "https://m.media-amazon.com/images/I/61Y3yCqXlIL._AC_SL1500_.jpg"
},
{
name: "Cable Organizer",
price: "₹149",
img: "https://m.media-amazon.com/images/I/61M8NnYQ2GL._AC_SL1500_.jpg"
}
],

1000: [
{
name: "Bluetooth Speaker",
price: "₹899",
img: "https://m.media-amazon.com/images/I/71l2pQX9pGL._AC_SL1500_.jpg"
},
{
name: "Gaming Mouse",
price: "₹799",
img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg"
},
{
name: "Laptop Cooling Pad",
price: "₹999",
img: "https://m.media-amazon.com/images/I/71l6MZ3kqQL._AC_SL1500_.jpg"
}
],

trending: [
{
name: "Smart Ring",
price: "₹6999",
img: "https://m.media-amazon.com/images/I/61d5LJbK2VL._AC_SL1500_.jpg"
},
{
name: "AI Voice Recorder",
price: "₹4999",
img: "https://m.media-amazon.com/images/I/61Yx6XlH4EL._AC_SL1500_.jpg"
},
{
name: "Portable Projector",
price: "₹3999",
img: "https://m.media-amazon.com/images/I/61G2h2QqKJL._AC_SL1500_.jpg"
}
]

};

title.innerText = category.toUpperCase() + " GADGETS";

products[category].forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<img src="${product.img}" alt="${product.name}">
<h3>${product.name}</h3>
<p style="padding:15px">Price: ${product.price}</p>
`;

grid.appendChild(card);

});
