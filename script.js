function searchProduct(){

const product=document.getElementById("searchInput").value;

alert("Searching prices for: "+product);

}


/* DARK / LIGHT MODE TOGGLE */

const toggle=document.getElementById("modeToggle");

toggle.addEventListener("change",function(){

document.body.classList.toggle("light-mode");

});


/* HERO SLIDER */

const images = [

"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",   // smartphone

"https://images.unsplash.com/photo-1518770660439-4636190af475",   // gadgets desk

"https://images.unsplash.com/photo-1498049794561-7780e7231661",   // laptop setup

"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"    // gaming tech

];

let index = 0;

function changeBackground(){

const hero = document.querySelector(".hero");

hero.style.backgroundImage =
"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(" + images[index] + ")";

index++;

if(index >= images.length){
index = 0;
}

}

function openCategory(category){

window.location.href = "products.html?cat=" + category;

}

setInterval(changeBackground,4000);

changeBackground();
