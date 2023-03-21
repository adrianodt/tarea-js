// funcion que crea las cards

let eventos = data.events;

mostrarEventos(eventos);

function crearCard(evento) {
  return `
    <div class="card">
      <img class="imagen-card" src="${evento.image}" alt="${evento.titulo}">
      <h3 class="h3-card">${evento.name}</h3>
      <p class="p-card">${evento.description}</p>
      <h5 class="precio-card">Precio: $${evento.price}</h5>
      <button class="boton-card" onclick="location.href='./details.html'">Info</button>
    </div>
  `;
}

let checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", function () {
    let seleccionados = new Set(); // Conjunto de valores de checkbox seleccionados
    for (let checkbox of checkboxes) {
      if (checkbox.checked) {
        seleccionados.add(checkbox.value);
      }
    }

    mostrarEventos(eventos, seleccionados);

    console.log(seleccionados);
  });
}

function mostrarEventos(eventos, checkboxes) {
  let contenedor = document.querySelector(".container-cards");
  contenedor.innerHTML = ""; // Vaciar el contenedor antes de agregar nuevas tarjetas
  for (let evento of eventos) {
    // Si ningún checkbox está seleccionado o el valor del checkbox coincide con el atributo del evento
    if (!checkboxes || checkboxes.has(evento.category)) {
      contenedor.innerHTML += crearCard(evento);
    }
  }
}



/* function updateCards() {
    let selectedCategories = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(checkbox => {
      selectedCategories.push(checkbox.value);
    });
    
    events.forEach(event => {
      let card = document.getElementById(event.name);
      if (selectedCategories.length === 0 || selectedCategories.includes(event.category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  */