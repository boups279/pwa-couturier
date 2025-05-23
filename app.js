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
  document.getElementById("cartCount").textContent = cart.length;
}

function showCart() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";

  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.name}
      <span class="badge bg-primary rounded-pill">${item.price.toLocaleString()} FCFA</span>
    `;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toLocaleString();

  // Bootstrap Modal affichage
  const myModal = new bootstrap.Modal(document.getElementById("cartModal"));
  myModal.show();
}


// function showCart() {
//   const cartList = document.getElementById("cartList");
//   cartList.innerHTML = "";
//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - ${item.price} FCFA`;
//     cartList.appendChild(li);
//   });
//   document.getElementById("cartModal").style.display = "block";
// }

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
