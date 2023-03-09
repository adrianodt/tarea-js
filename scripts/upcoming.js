let date1 = new Date(data.currentDate);
let arrayUpcoming = [];

data.events.forEach((evento) => {
  let date2 = new Date(evento.date);
  if (date1 < date2) {
    arrayUpcoming.push(evento);
  }
});

crearCard(arrayUpcoming, "#container-cards-upcoming");