function searchProduct(){

const product=document.getElementById("searchInput").value;

alert("Searching prices for: "+product);

}


const toggle=document.getElementById("modeToggle");

toggle.addEventListener("change",function(){

document.body.classList.toggle("light-mode");

});
