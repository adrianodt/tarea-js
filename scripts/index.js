let containerCard = document.getElementById("container-card");

for (let i = 0; i < data.events.length; i++) {
  //crea el div del card
  let div = document.createElement("div");
  div.className = "card";
  /* div.innerHTML = data.events[i].name; */

  //crea la imagen
  let imagenCard = document.createElement("img");
  imagenCard.className = "imagen-card";
  let imagenSrc = data.events[i].image;
  imagenCard.src = imagenSrc;
  div.appendChild(imagenCard);

  //crea el titulo
  let tituloCard = document.createElement("h3");
  tituloCard.className = "h3-card";
  let name = data.events[i].name;
  tituloCard.textContent = name;
  div.appendChild(tituloCard);

  //crea la descripcion
  let descripcionCard = document.createElement("p");
  descripcionCard.className = "p-card";
  let description = data.events[i].description;
  descripcionCard.textContent = description;
  div.appendChild(descripcionCard);

  //crea el precio
  let precioCard = document.createElement("h5");
  precioCard.className = "h5-card";
  let precio = data.events[i].price;
  precioCard.textContent = "Price: $" + precio;
  div.appendChild(precioCard);

  //crea el boton
  let boton = document.createElement("button");
  boton.className = "boton-card";
  boton.innerHTML = "Ver más";
  boton.addEventListener("click", function() {
    window.location.href = "./details.html";
  });
  div.appendChild(boton);

  containerCard.appendChild(div);

  console.log(div);
}
