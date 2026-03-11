const params = new URLSearchParams(window.location.search);

const category = params.get("cat");

const title = document.getElementById("categoryTitle");
const grid = document.getElementById("productGrid");

const products = {

cool: [
{ name: "Mini Projector", price: "₹2999", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6" },
{ name: "Magnetic Charging Cable", price: "₹399", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505" },
{ name: "Portable Monitor", price: "₹7999", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7" }
],

toys: [
{ name: "VR Headset", price: "₹2499", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" },
{ name: "Mini Drone", price: "₹3499", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e" },
{ name: "Smart LED Cube", price: "₹999", img: "https://images.unsplash.com/photo-1558002038-1055907df827" }
],

500: [
{ name: "LED Strip Lights", price: "₹299", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64" },
{ name: "Phone Stand", price: "₹199", img: "https://images.unsplash.com/photo-1603898037225-1a1d9b6dca3a" },
{ name: "Cable Organizer", price: "₹149", img: "https://images.unsplash.com/photo-1616627458315-c0b0e4bcea90" }
],

1000: [
{ name: "Bluetooth Speaker", price: "₹899", img: "https://images.unsplash.com/photo-1589003077984-894e133dabab" },
{ name: "Gaming Mouse", price: "₹799", img: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a" },
{ name: "Laptop Cooling Pad", price: "₹999", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" }
],

trending: [
{ name: "Smart Ring", price: "₹6999", img: "https://images.unsplash.com/photo-1629376539308-7b5c8e52f5f0" },
{ name: "AI Voice Recorder", price: "₹4999", img: "https://images.unsplash.com/photo-1518441902117-b3b1d0c5b0f9" },
{ name: "Portable Projector", price: "₹3999", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6" }
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
