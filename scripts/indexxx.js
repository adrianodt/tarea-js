let eventos = data.events;
let contenedor = document.querySelector(".container-cards");

//creo cards automaticamente
function crearCards(arr, contenedor) {
  //guardo el contenedor que le paso como parametro al query selector
  let containerCards = document.querySelector(contenedor);
  //reseteo el contenido de lista para que no se acumulen los distintos lis
  containerCards.innerHTML = "";
  //innereo esos lis
  arr.forEach((evento) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="card">
          <img class="imagen-card" src="${evento.image}" alt="${evento.titulo}">
          <h3 class="h3-card">${evento.name}</h3>
          <p class="p-card">${evento.description}</p>
          <h5 class="precio-card">Precio: $${evento.price}</h5>
          <button class="boton-card" onclick="location.href='./details.html'">Info</button>
        </div>
      `;
    containerCards.appendChild(div);
  });
}

crearCards(eventos, "#container-cards");


///////////////////////////////////////////

let checkButtons = document.querySelectorAll('input[type="checkbox"]');
console.log(checkButtons);

checkButtons.forEach(check => check.addEventListener("change", verificarSeleccion));


function verificarSeleccion(){

    //filtro los radio chequeados
    let seleccionado = Array.from(checkButtons).filter(check => check.checked)
    
    //guardo en una variable el array que me devuelve filtrarNumeros
    let arrayEventosSeleccionados = filtrarEventos(eventos,seleccionado[0].value)
    console.log(seleccionado[0].value);

    //creo la lista con mi function crear lista
    crearLista(arrayEventosSeleccionados,"#container-cards")
}

function filtrarEventos(arrEventos, valor){
    //filtro los numeros comparandolos con el valor que tomo del value de mis radio
    let eventosFiltrados = arrEventos.filter(event => 
        if (!checkboxes || event.category))

    return eventosFiltrados;
}