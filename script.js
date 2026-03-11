function searchProduct(){

const product=document.getElementById("searchInput").value;

alert("Searching prices for: "+product);

}


const toggle=document.getElementById("darkToggle");

toggle.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

});
