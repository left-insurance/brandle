const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const title = document.getElementById("categoryTitle");
const grid = document.getElementById("productGrid");

const products = {

cool: [
{
name: "Mini Projector",
price: "₹2999",
img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/projector-1867193_1280.jpg"
},
{
name: "Magnetic Charging Cable",
price: "₹399",
img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/cable-1839406_1280.jpg"
},
{
name: "Portable Monitor",
price: "₹7999",
img: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg"
}
],

toys: [
{
name: "VR Headset",
price: "₹2499",
img: "https://cdn.pixabay.com/photo/2017/02/01/22/02/virtual-reality-2038730_1280.jpg"
},
{
name: "Mini Drone",
price: "₹3499",
img: "https://cdn.pixabay.com/photo/2016/03/09/09/22/drone-1245980_1280.jpg"
},
{
name: "Smart LED Cube",
price: "₹999",
img: "https://cdn.pixabay.com/photo/2018/01/06/09/25/cube-3063803_1280.jpg"
}
],

500: [
{
name: "LED Strip Lights",
price: "₹299",
img: "https://cdn.pixabay.com/photo/2020/01/29/20/26/led-4805974_1280.jpg"
},
{
name: "Phone Stand",
price: "₹199",
img: "https://cdn.pixabay.com/photo/2017/08/06/11/44/mobile-phone-2596269_1280.jpg"
},
{
name: "Cable Organizer",
price: "₹149",
img: "https://cdn.pixabay.com/photo/2017/03/27/13/39/cable-2178665_1280.jpg"
}
],

1000: [
{
name: "Bluetooth Speaker",
price: "₹899",
img: "https://cdn.pixabay.com/photo/2016/11/19/16/01/speaker-1849592_1280.jpg"
},
{
name: "Gaming Mouse",
price: "₹799",
img: "https://cdn.pixabay.com/photo/2017/05/11/22/06/mouse-2305274_1280.jpg"
},
{
name: "Laptop Cooling Pad",
price: "₹999",
img: "https://cdn.pixabay.com/photo/2015/01/21/14/14/laptop-606761_1280.jpg"
}
],

trending: [
{
name: "Smart Ring",
price: "₹6999",
img: "https://cdn.pixabay.com/photo/2018/03/25/11/58/ring-3266094_1280.jpg"
},
{
name: "AI Voice Recorder",
price: "₹4999",
img: "https://cdn.pixabay.com/photo/2016/11/21/16/27/microphone-1843984_1280.jpg"
},
{
name: "Portable Projector",
price: "₹3999",
img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/projector-1867193_1280.jpg"
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
