function searchProduct(){

const product=document.getElementById("searchInput").value;

alert("Searching prices for: "+product);

}


/* DARK / LIGHT MODE TOGGLE */

const toggle=document.getElementById("modeToggle");

toggle.addEventListener("change",function(){

document.body.classList.toggle("light-mode");

});


/* HERO BACKGROUND SLIDER */

const images = [
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
"https://images.unsplash.com/photo-1498049794561-7780e7231661",
"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
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

setInterval(changeBackground,4000);

changeBackground();
