let btn = document.getElementById("buttn");
let root = document.getElementById("root");
let Toyota = document.getElementById("toyotaCars");
let lexus = document.getElementById("lexusCars");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "15px";
btn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((car) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    });
});

Toyota.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((car) => {
        if (car.brand == "Toyota") {
          let newCard = document.createElement("div");
          newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
          root.appendChild(newCard);
        }
      });
    });
});
lexus.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((car) => {
        if (car.brand == "Lexus") {
          let newCard = document.createElement("div");
          newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
          root.appendChild(newCard);
        }
      });
    });
});
