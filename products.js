const grid = document.getElementById("productGrid");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");

const params = new URLSearchParams(window.location.search);

let searchQuery = params.get("search");
const category = params.get("cat");

let products = [];

/* CATEGORY MAPPING */

if (!searchQuery) {
  if (category === "cool") searchQuery = "cool gadgets";
  else if (category === "toys") searchQuery = "gaming gadgets";
  else if (category === "trending") searchQuery = "latest tech gadgets";
  else if (category === "500") searchQuery = "gadgets under 500";
  else if (category === "1000") searchQuery = "gadgets under 1000";
  else searchQuery = "gadgets";
}

/* SHOW SPINNER ON LOAD */

grid.innerHTML = `
<div style="display:flex; justify-content:center; align-items:center; height:200px;">
  <div class="loader"></div>
</div>
`;

/* FETCH PRODUCTS */

/* TEMP FIX — DUMMY PRODUCTS */

products = [
{
product_title: "Wireless Bluetooth Headphones",
product_price: "₹999",
product_photo: "https://images.unsplash.com/photo-1518444028785-8f8f2a3d6a8b",
product_star_rating: "4.5"
},
{
product_title: "Portable Mini Projector",
product_price: "₹2,499",
product_photo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
product_star_rating: "4.2"
},
{
product_title: "Smart LED Strip Lights",
product_price: "₹599",
product_photo: "https://images.unsplash.com/photo-1606813902917-9c3d9a8d7b57",
product_star_rating: "4.3"
},
{
product_title: "Gaming Mouse RGB",
product_price: "₹799",
product_photo: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
product_star_rating: "4.4"
}
];

displayProducts(products);
/* DISPLAY FUNCTION */

function displayProducts(list) {
  grid.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.product_photo}" alt="${product.product_title}">
        </div>

        <div class="product-info">
          <h3>${product.product_title}</h3>

          <div class="rating">
            ⭐ ${product.product_star_rating || "4.2"}
          </div>

          <p class="price">${product.product_price}</p>

          <button class="price-btn" onclick="buyProduct('${product.product_title.replace(/'/g, "\\'")}')">
            Check Best Price
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* FILTERS */

function applyFilters() {
  grid.innerHTML = `
  <div style="display:flex; justify-content:center; align-items:center; height:200px;">
    <div class="loader"></div>
  </div>
  `;

  setTimeout(() => {
    let filtered = [...products];

    if (priceFilter && priceFilter.value === "low") {
      filtered.sort((a, b) =>
        parseFloat(a.product_price.replace(/[^0-9.]/g, '')) -
        parseFloat(b.product_price.replace(/[^0-9.]/g, ''))
      );
    }

    if (priceFilter && priceFilter.value === "high") {
      filtered.sort((a, b) =>
        parseFloat(b.product_price.replace(/[^0-9.]/g, '')) -
        parseFloat(a.product_price.replace(/[^0-9.]/g, ''))
      );
    }

    if (ratingFilter && ratingFilter.value !== "0") {
      filtered = filtered.filter(p =>
        parseFloat(p.product_star_rating || 4) >= parseFloat(ratingFilter.value)
      );
    }

    displayProducts(filtered);
  }, 400);
}

/* EVENTS */

if (priceFilter) priceFilter.addEventListener("change", applyFilters);
if (ratingFilter) ratingFilter.addEventListener("change", applyFilters);

/* AMAZON AFFILIATE */

function buyProduct(title) {
  const query = title.replace(/ /g, "+");
  const affiliateID = "brandle0a-21"; // your affiliate ID
  const url = `https://www.amazon.in/s?k=${query}&tag=${affiliateID}`;
  window.open(url, "_blank");
}
