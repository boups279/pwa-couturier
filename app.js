function filter(category) {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
    }
  });
}

function openFullScreen(src) {
  const win = window.open();
  win.document.write(`<img src="${src}" style="width:100%">`);
}

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} ajouté au panier.`);
}

function showCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} FCFA`;
    cartList.appendChild(li);
  });
  document.getElementById("cartModal").style.display = "block";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message envoyé ! Merci.");
});

document.getElementById("devisForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Demande de devis envoyée !");
});

document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = this.querySelector("input").value;
  const avis = this.querySelector("textarea").value;
  const avisContainer = document.getElementById("avisContainer");
  const div = document.createElement("div");
  div.innerHTML = `<strong>${nom}</strong>: ${avis}`;
  avisContainer.appendChild(div);
  this.reset();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
