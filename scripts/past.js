let date1 = new Date(data.currentDate);
let arrayPast = [];

data.events.forEach((evento) => {
  let date2 = new Date(evento.date);
  if (date1 > date2) {
    arrayPast.push(evento);
  }
});

crearCard(arrayPast, "#container-cards-past");


