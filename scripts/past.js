let eventos = data.events;
let date1 = new Date(data.currentDate);
let arrayPast = [];

eventos.forEach((evento) => {
  let date2 = new Date(evento.date);
  if (date1 > date2) {
    arrayPast.push(evento);
    console.log(arrayPast);
  }
});


  function crearTarjeta(evento) {
    return `
    <div class="card">
      <img class="imagen-card" src="${evento.image}" alt="${evento.titulo}">
      <h3 class="h3-card">${evento.name}</h3>
      <p class="p-card">${evento.description}</p>
      <h5 class="precio-card">Price: $${evento.price}</h5>
      <button class="boton-card" onclick="location.href='./details.html'">Info</button>
    </div>
  `;
  }

  function mostrarTarjetas(categoriasSeleccionadas) {
    let container = document.getElementById("container-cards-past");
    container.innerHTML = "";

    console.log(categoriasSeleccionadas);
  
    arrayPast.forEach(function(evento) {
      if (
        categoriasSeleccionadas.length === 0 ||
        categoriasSeleccionadas.includes(evento.category)
      ) {
        let tarjeta = crearTarjeta(evento);
        container.innerHTML += tarjeta;
      }
    });
  }

  
  let checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function() {
    let categoriasSeleccionadas = [];

    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        categoriasSeleccionadas.push(checkbox.value);
      }
    });

    mostrarTarjetas(categoriasSeleccionadas);
  });
});

mostrarTarjetas([]);


/* let form = document.getElementById("busqueda");
let input = document.getElementById("input");

console.log([form]);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(input.value.toLowerCase());
  let palabraClave = input.value.toLowerCase();
  console.log(palabraClave);
}); */



