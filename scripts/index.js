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
  boton.addEventListener("click", function () {
    window.location.href = "./details.html";
  });
  div.appendChild(boton);

  containerCard.appendChild(div);

  console.log(div);
}

let categoriaSinRepe = [];

for (let i = 0; i < data.events.length; i++) {
  if (!categoriaSinRepe.includes(data.events[i].category)) {
    categoriaSinRepe.push(data.events[i].category);
  }
}

console.log(categoriaSinRepe);

let containerFiltros = document.getElementById("container-filtros");

// funcion q crea los checkbox

function crearListaFiltros(arr, contenedor) {
  let listaFiltros = document.querySelector(contenedor);

  let formulario = document.createElement("form");

  arr.forEach((item) => {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "elementos";
    checkbox.value = item;
    console.log(checkbox.value);

    let label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.appendChild(document.createTextNode(item));

    formulario.appendChild(checkbox);
    formulario.appendChild(label);
  });
  containerFiltros.appendChild(formulario);
}

crearListaFiltros(categoriaSinRepe, "container-filtros");
