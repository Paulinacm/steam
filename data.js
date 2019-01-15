// AQUI VA LA LOGICA. funciones filtrar, ordenar
const data = STEAM.appnews.newsitems;

//console.log(dataSteam)
for (let i=0; i<data.length; i++) {
  //console.log(dataSteam[i].title)
}

//Filtros
//filtrar por título
const titleSteam = (data) => {
  //console.log(data);
  let title = [];
  for (let i=0; i< data.length; i++){
    title.push(data[i].title)
  }
  return title;
}
window.titleSteam = titleSteam;


//filtrar por date
const dateSteam = (data) => {
  //console.log(data);
  let date = [];
  for (let i = 0; i < data.length; i++) {
    date.push(data[i].date)
  }
  return date;
}
window.dateSteam = dateSteam;


// filtrar por autor
const authorSteam = (data) => {
  //console.log(data);
  let author = [];
  for (let i = 0; i < data.length; i++) {
    author.push(data[i].author)
  }
  return author;
}
window.authorSteam = authorSteam;


//ordenar alfabeticamente

//ordenar numéricamente




// Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.



/*
filterData(data, condition): esta función filter o filtrar recibiría la data,
  y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros.
El primer parámetro, data, nos entrega los datos.El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar.El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos
para ser mostrados de acuerdo a la data proporcionada.
*/

